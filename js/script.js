console.log("JavaScript conectado com sucesso!");

const titulo = document.querySelector("h1");

titulo.textContent = "Minha Jornada Frontend";

const botao = document.querySelector("#botaoMensagem");

const secaoSobre = document.querySelector("#sobre");

botao.addEventListener("click", function() {

    secaoSobre.classList.toggle("oculto");

});

const botaoAdicionar = document.querySelector("#botaoAdicionar");

const inputObjetivo = document.querySelector("#inputObjetivo");

const mensagemErro = document.querySelector("#mensagemErro");

const contadorObjetivos = document.querySelector("#contadorObjetivos");

const pesquisaObjetivo = document.querySelector("#pesquisaObjetivo");

const botaoOrdenar = document.querySelector("#botaoOrdenar");

let ordemCrescente = true;

function adicionarEventoRemover(botao, item) {

    botao.addEventListener("click", function(){

        item.remove();

        atualizarContador();

        localStorage.setItem(
            "objetivos",
            document.querySelector("ul").innerHTML
        );
    });
}

atualizarContador();

function atualizarContador() {
    const total = document.querySelectorAll("ul li").length;

    contadorObjetivos.textContent =
    "Total de objetivos: " + total;
}

botaoAdicionar.addEventListener("click", function() {

    if (inputObjetivo.value === "") {

        mensagemErro.textContent = "Digite um objetivo antes de adicionar!";

        intputObjetivo.classList.add("erroInput");

        return;
    }

    const novoItem = document.createElement("li");

    novoItem.textContent = inputObjetivo.value;

    const botaoRemover = document.createElement("button");

    botaoRemover.textContent = "Remover";

    adicionarEventoRemover(botaoRemover, novoItem);

    novoItem.appendChild(botaoRemover);

    document.querySelector("ul").appendChild(novoItem);

    localStorage.setItem("objetivos", document.querySelector("ul").innerHTML);

    inputObjetivo.value = ""; 

    mensagemErro.textContent = "";

    inputObjetivo.classList.remove("erroInput");

});

const botaoDestaque = document.querySelector("#botaoDestaque");

botaoDestaque.addEventListener("click", function(){

    secaoSobre.classList.toggle("destaque");

});

const objetivosSalvos = localStorage.getItem("objetivos");

if (objetivosSalvos) {

    document.querySelector("ul").innerHTML = objetivosSalvos;
}

const botoesRemover = document.querySelectorAll("li button");

botoesRemover.forEach(function(botao) {

    const item = botao.parentElement;

    adicionarEventoRemover(botao, item);
});

atualizarContador();

pesquisaObjetivo.addEventListener("input", function(){

    const textoPesquisa =
        pesquisaObjetivo.value.toLowerCase();

    const itensLista =
        document.querySelectorAll("ul li");

    itensLista.forEach(function(item) {

        const textoItem =
            item.textContent.toLowerCase();

        if (textoItem.includes(textoPesquisa)) {

            item.style.display = "list-item";

        } else {

            item.style.display = "none";

        }
    });
});

botaoOrdenar.addEventListener("click", function() {

    const lista = document.querySelector("ul");

    const itens =
        Array.from(document.querySelectorAll("ul li"));

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

    localStorage.setItem(
        "objetivos",
        lista.innerHTML
    );

    ordemCrescente = !ordemCrescente;

});