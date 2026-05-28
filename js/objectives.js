function criarObjetivo(textoObjetivo) {

    const novoItem = document.createElement("li");

    novoItem.classList.add("animarEntrada");

    const textoItem = document.createElement("span");

    textoItem.textContent = textoObjetivo;

    novoItem.appendChild(textoItem);

    const botaoEditar = document.createElement("button");

    botaoEditar.textContent = "Editar";

    botaoEditar.addEventListener("click", function() {

        const novoTexto = prompt("Editar objetivo:",textoItem.textContent);

        if (novoTexto !== null && novoTexto !== "") {

            textoItem.textContent = novoTexto;

            salvarObjetivos(listaObjetivos.innerHTML);

        }

    });

    const botaoRemover = document.createElement("button");

    botaoRemover.textContent = "Remover";

    adicionarEventoRemover(botaoRemover, novoItem);

    novoItem.appendChild(botaoEditar);

    novoItem.appendChild(botaoRemover);

    listaObjetivos.appendChild(novoItem);

    atualizarContador();

}

atualizarContador();

function atualizarContador() {
    const total = listaObjetivos.querySelectorAll("li").length;

    if (total === 0) {

        mensagemVazia.style.display = "block";
    } else {
        mensagemVazia.style.display = "none";
    }

    contadorObjetivos.textContent = "Total de objetivos: " + total;
}

function adicionarEventoRemover(botao, item) {

    botao.addEventListener("click", function(){

        itemParaRemover = item;

        modalConfirmacao.classList.remove("modalOculto");
    });
}