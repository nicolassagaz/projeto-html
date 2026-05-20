console.log("JavaScript conectado com sucesso!");

const titulo = document.querySelector("h1");

titulo.textContent = "Minha Jornada Frontend";

const botao = document.querySelector("#botaoMensagem");

const secaoSobre = document.querySelector("#sobre");

botao.addEventListener("click", function() {

    secaoSobre.classList.toggle("oculto");

});

const botaoAdicionar = document.querySelector("#botaoAdicionar");

const intputObjetivo = document.querySelector("#inputObjetivo");

const mensagemErro = document.querySelector("#mensagemErro");

botaoAdicionar.addEventListener("click", function() {

    if (intputObjetivo.value === "") {

        mensagemErro.textContent = "Digite um objetivo antes de adicionar!";

        intputObjetivo.classList.add("erroInput");

        return;
    }

    const novoItem = document.createElement("li");

    novoItem.textContent = intputObjetivo.value;

    const botaoRemover = document.createElement("button");

    botaoRemover.textContent = "Remover";

    botaoRemover.addEventListener("click", function() {

        novoItem.remove();

    });

    novoItem.appendChild(botaoRemover);

    document.querySelector("ul").appendChild(novoItem);

    intputObjetivo.value = ""; 

    mensagemErro.textContent = "";

    intputObjetivo.classList.remove("erroInput");

});

const botaoDestaque = document.querySelector("#botaoDestaque");

botaoDestaque.addEventListener("click", function(){

    secaoSobre.classList.toggle("destaque");

});

