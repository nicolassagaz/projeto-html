function salvarObjetivos(listaHTML) {

    localStorage.setItem( "objetivos", listaHTML);
}

function carregarObjetivosSalvos() {

    return localStorage.getItem(
        "objetivos"
    );
}

function salvarRascunho(valor) {

    localStorage.setItem("rascunhoObjetivo",valor);
}

function carregarRascunho() {

    return localStorage.getItem("rascunhoObjetivo");
}
function removerRascunho() {

    localStorage.removeItem("rascunhoObjetivo");
}