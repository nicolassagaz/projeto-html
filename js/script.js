console.log("JavaScript conectado com sucesso!");

// =========================
// ELEMENTOS DA INTERFACE
// =========================

const titulo = document.querySelector("h1");

titulo.textContent = "Minha Jornada Frontend";

const botaoAdicionar = document.querySelector("#botaoAdicionar");

const inputObjetivo = document.querySelector("#inputObjetivo");

const mensagemErro = document.querySelector("#mensagemErro");

const contadorObjetivos = document.querySelector("#contadorObjetivos");

const pesquisaObjetivo = document.querySelector("#pesquisaObjetivo");

const botaoOrdenar = document.querySelector("#botaoOrdenar");

const botaoTema = document.querySelector("#botaoTema");

const modalConfirmacao = document.querySelector("#modalConfirmacao");

const confirmarRemocao = document.querySelector("#confirmarRemocao");

const cancelarRemocao = document.querySelector("#cancelarRemocao");

const fraseMotivacional = document.querySelector("#fraseMotivacional");

const mensagemVazia = document.querySelector("#mensagemVazia");

let itemParaRemover = null;

let ordemCrescente = true;

// =========================
// FUNÇÕES
// =========================~

function adicionarEventoRemover(botao, item) {

    botao.addEventListener("click", function(){

        itemParaRemover = item;

        modalConfirmacao.classList.remove("modalOculto");
    });
}

atualizarContador();

function atualizarContador() {
    const total = document.querySelectorAll("ul li").length;

    if (total === 0) {

        mensagemVazia.style.display = "block";
    } else {
        mensagemVazia.style.display = "none";
    }

    contadorObjetivos.textContent = "Total de objetivos: " + total;
}

function salvarObjetivos() {

    localStorage.setItem("objetivos", document.querySelector("ul").innerHTML);
}

function carregarObjetivos() {

    const objetivosSalvos = localStorage.getItem("objetivos");

    if(objetivosSalvos) {

        document.querySelector("ul").innerHTML = objetivosSalvos;
    }

    const botoesRemover = document.querySelectorAll("li button");

    botoesRemover.forEach(function(botao){

        const item = botao.parentElement;

        adicionarEventoRemover(botao, item);
    });
}

function criarObjetivo(textoObjetivo) {

    const novoItem = document.createElement("li");

    novoItem.classList.add("animarEntrada");

    novoItem.textContent = textoObjetivo;

    const botaoEditar =
        document.createElement("button");

    botaoEditar.textContent = "Editar";

    botaoEditar.addEventListener("click", function() {

        const novoTexto = prompt(
            "Editar objetivo:",
            textoObjetivo
        );

        if (novoTexto !== null && novoTexto !== "") {

            novoItem.firstChild.textContent = novoTexto;

            salvarObjetivos();

        }

    });

    const botaoRemover =
        document.createElement("button");

    botaoRemover.textContent = "Remover";

    adicionarEventoRemover(
        botaoRemover,
        novoItem
    );

    novoItem.appendChild(botaoEditar);

    novoItem.appendChild(botaoRemover);

    document.querySelector("ul")
        .appendChild(novoItem);

}

// =========================
// EVENTOS
// =========================

botaoAdicionar.addEventListener("click", function() {

    if (inputObjetivo.value === "") {

        mensagemErro.textContent = "Digite um objetivo antes de adicionar!";

        inputObjetivo.classList.add("erroInput");

        return;
    }

    criarObjetivo(inputObjetivo.value);

    salvarObjetivos();

    inputObjetivo.value = ""; 

    mensagemErro.textContent = "";

    inputObjetivo.classList.remove("erroInput");

});

inputObjetivo.addEventListener("keydown", function(evento) {
    
    if (evento.key === "Enter") {

        botaoAdicionar.click();

    }
});

// =========================
// LOCAL STORAGE
// =========================

carregarObjetivos();

atualizarContador();

pesquisaObjetivo.addEventListener("input", function(){

    const textoPesquisa = pesquisaObjetivo.value.toLowerCase();

    const itensLista = document.querySelectorAll("ul li");

    itensLista.forEach(function(item) {

        const textoItem = item.textContent.toLowerCase();

        if (textoItem.includes(textoPesquisa)) {

            item.style.display = "list-item";

        } else {

            item.style.display = "none";

        }
    });
});

botaoOrdenar.addEventListener("click", function() {

    const lista = document.querySelector("ul");

    const itens = Array.from(document.querySelectorAll("ul li"));

    itens.sort(function(a, b) {

        if (ordemCrescente) {

            return a.textContent.localeCompare(b.textContent);

        } else {

            return b.textContent.localeCompare(a.textContent);
        }
    });

    lista.innerHTML = "";

    itens.forEach(function(item) {

        lista.appendChild(item);
        
    });

    salvarObjetivos();

    ordemCrescente = !ordemCrescente;

});

botaoTema.addEventListener("click", function(){

    document.body.classList.toggle("darkMode");

    const temaEscuroAtivo = document.body.classList.contains("darkMode");

    localStorage.setItem(
        "darkMode",
        temaEscuroAtivo
    );
});

const temaSalvo = localStorage.getItem("darkMode");

if (temaSalvo === "true") {

    document.body.classList.add("darkMode");
}

confirmarRemocao.addEventListener("click", function() {
    if (itemParaRemover) {

        itemParaRemover.remove();

        atualizarContador();

        salvarObjetivos();
    }

    modalConfirmacao.classList.add("modalOculto");
});

cancelarRemocao.addEventListener("click", function() {

    modalConfirmacao.classList.add("modalOculto");
});

// =========================
// API EXTERNA
// =========================

async function carregarFrase() {

    try {

        const resposta = await fetch("https://dummyjson.com/quotes/random");
        const dados = await resposta.json();

        fraseMotivacional.textContent = dados.quote;

    } catch (erro) {

        fraseMotivacional.textContent =
            "Não foi possível carregar a frase";
    }
}

carregarFrase();