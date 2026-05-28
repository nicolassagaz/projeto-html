function alternarTema() {

    document.body.classList.toggle("darkMode");

    const temaEscuroAtivo =
        document.body.classList.contains("darkMode");

    localStorage.setItem("darkMode",temaEscuroAtivo);
}

function carregarTema() {

    const temaSalvo = localStorage.getItem("darkMode");

    if (temaSalvo === "true") {

        document.body.classList.add("darkMode");
    }
}