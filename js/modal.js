let itemParaRemover = null;

function abrirModal(item) {

    itemParaRemover = item;

    modalConfirmacao.classList.remove("modalOculto");
}

function fecharModal() {

    modalConfirmacao.classList.add("modalOculto");
}

function confirmarExclusao() {

    if (itemParaRemover) {

        itemParaRemover.remove();

        atualizarContador();

        salvarObjetivos(listaObjetivos.innerHTML);
    }

    fecharModal();
}