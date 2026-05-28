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

const listaObjetivos = document.querySelector("#listaObjetivos");

const pesquisaObjetivo = document.querySelector("#pesquisaObjetivo");

const botaoOrdenar = document.querySelector("#botaoOrdenar");

const botaoTema = document.querySelector("#botaoTema");

const modalConfirmacao = document.querySelector("#modalConfirmacao");

const confirmarRemocao = document.querySelector("#confirmarRemocao");

const cancelarRemocao = document.querySelector("#cancelarRemocao");

const fraseMotivacional = document.querySelector("#fraseMotivacional");

const mensagemVazia = document.querySelector("#mensagemVazia");

let ordemCrescente = true;

// =========================
// FUNÇÕES
// =========================~


function carregarObjetivos() {

    const objetivosSalvos = carregarObjetivosSalvos();
    if(objetivosSalvos) {

        listaObjetivos.innerHTML = objetivosSalvos;
    }

    const botoesRemover = document.querySelectorAll("li button");

    botoesRemover.forEach(function(botao){

        const item = botao.parentElement;

        adicionarEventoRemover(botao, item);
    });
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

    const objetivosExistentes = Array.from(document.querySelectorAll("ul li"));

    const objetivoDuplicado = objetivosExistentes.some(function(item) {
        return item.firstChild.textContent
            .toLowerCase()
            .trim() ===
            inputObjetivo.value.toLowerCase().trim();
    });

    if (objetivoDuplicado) {
        mensagemErro.textContent = "Esse objetivo já existe.";
        inputObjetivo.classList.add("erroInput");
        return;
    }

    criarObjetivo(inputObjetivo.value);

    salvarObjetivos(listaObjetivos.innerHTML);

    inputObjetivo.value = "";
    
    removerRascunho();

    mensagemErro.textContent = "";

    inputObjetivo.classList.remove("erroInput");

});

inputObjetivo.addEventListener("keydown", function(evento) {
    
    if (evento.key === "Enter") {

        botaoAdicionar.click();

    }
});

inputObjetivo.addEventListener("input", function(){
    salvarRascunho(inputObjetivo.value);
});

// =========================
// LOCAL STORAGE
// =========================

carregarObjetivos();

const rascunhoSalvo = carregarRascunho();

if (rascunhoSalvo) {
    inputObjetivo.value = rascunhoSalvo;
}

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

    const lista = listaObjetivos;

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

    salvarObjetivos(document.querySelector("ul").innerHTML);

    ordemCrescente = !ordemCrescente;

});

// =========================
// FRASES MOTIVACIONAIS
// =========================

const frases = [
    "Continue evoluindo um passo de cada vez.",

    "Consistência supera motivação.",

    "Projetos pequenos constroem grandes habilidades.",

    "Cada linha de código é prática para o futuro.",

    "Aprender programação é uma maratona, não uma corrida.",

    "Seu portfólio cresce junto com sua experiência.",

    "Errar faz parte do desenvolvimento.",

    "Todo desenvolvedor começou sem saber programar."
];
    function carregarFrase(){

        const indiceAleatorio = Math.floor(Math.random()*frases.length);

        fraseMotivacional.textContent = frases[indiceAleatorio];
    }

carregarFrase();
