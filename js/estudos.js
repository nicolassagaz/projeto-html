console.log("Arquivo de estudos carregado!");
// =========================
// OBJETOS JS
// =========================
const objetivos = [

    {
        nome: "Aprender JavaScript",

        concluido: false,

        categoria: "Frontend"
    },

    {
        nome: "Estudar Python",

        concluido: false,

        categoria: "Backend"
    },

    {
        nome: "Criar portfólio",

        concluido: true,

        categoria: "Carreira"
    }

];

console.log(objetivos);

console.log(objetivos[0]);

console.log(objetivos[1]);

console.log(objetivos[2]);

console.log(objetivos[0].nome);

console.log(objetivos[1].categoria);

console.log(objetivos[2].concluido);

objetivos.forEach(function(objetivo) {

    console.log(
        objetivo.nome +
        " | " +
        objetivo.categoria
    );

    if (objetivo.concluido) {

        console.log("Objetivo concluído");

    } else {

        console.log("Objetivo pendente");

    }

});

const nomesObjetivos = objetivos.map(
    (objetivo) => objetivo.nome
);

console.log(nomesObjetivos);

const categorias = objetivos.map(function(objetivo) {

    return objetivo.categoria;

});

console.log(categorias);

const frasesObjetivos = objetivos.map(function(objetivo) {

    return objetivo.nome +
        " pertence à categoria " +
        objetivo.categoria;

});

console.log(frasesObjetivos);

const objetivosConcluidos = objetivos.filter(
    (objetivo) => objetivo.concluido === true
);

console.log(objetivosConcluidos);

const objetivosFrontend = objetivos.filter(function(objetivo) {

    return objetivo.categoria === "Frontend";

});

console.log(objetivosFrontend);

const objetivosPendentes = objetivos.filter(function(objetivo) {

    return objetivo.concluido === false;

});

console.log(objetivosPendentes);

const objetivoPython = objetivos.find(
    (objetivo) => objetivo.nome === "Estudar Python"
);

console.log(objetivoPython);

const objetivoConcluido = objetivos.find(function(objetivo) {

    return objetivo.concluido === true;

});

console.log(objetivoConcluido);

const existePython = objetivos.some(
    (objetivo) =>
        objetivo.nome.includes("Python")
);

console.log(existePython);

const existeJava = objetivos.some(
    (objetivo) =>
        objetivo.nome.includes("Java")
);

console.log(existeJava);

const frase = "Aprender JavaScript moderno";

console.log(frase.includes("JavaScript"));

console.log(frase.includes("Python"));

const todosConcluidos = objetivos.every(
    (objetivo) => objetivo.concluido === true
);

console.log(todosConcluidos);

const todosFrontend = objetivos.every(
    (objetivo) => objetivo.categoria === "Frontend"
);

console.log(todosFrontend);

const numeros = [2, 4, 6, 8];

const todosPares = numeros.every(
    (numero) => numero % 2 === 0
);

console.log(todosPares);

const totalObjetivos = objetivos.reduce(
    (acumulador, objetivo) => {

        return acumulador + 1;

    },
    0
);

console.log(totalObjetivos);

const totalConcluidos = objetivos.reduce(
    (acumulador, objetivo) => {

        if (objetivo.concluido) {

            return acumulador + 1;

        }

        return acumulador;

    },
    0
);

console.log(totalConcluidos);

const numerosSoma = [10, 20, 30, 40];

const soma = numerosSoma.reduce(
    (acumulador, numero) => {

        return acumulador + numero;

    },
    0
);

console.log(soma);

const objetivoReact = {

    nome: "Aprender React",

    categoria: "Frontend",

    concluido: false

};

const { nome, categoria, concluido } = objetivoReact;

console.log(nome);

console.log(categoria);

console.log(concluido);

objetivos.forEach((objetivo) => {

    const { nome, categoria } = objetivo;

    console.log(nome + " | " + categoria);

});

objetivos.forEach(({ nome, categoria }) => {

    console.log(nome + " pertence a " + categoria);

});

const tecnologiasFrontend = [
    "HTML",
    "CSS",
    "JavaScript"
];

const tecnologiasComReact = [
    ...tecnologiasFrontend,
    "React"
];

console.log(tecnologiasComReact);

const backend = [
    "Python",
    "Node.js"
];

const stackCompleta = [
    ...tecnologiasFrontend,
    ...backend
];

console.log(stackCompleta);

const usuario = {

    nome: "Nicolas",

    area: "Frontend"

};

const usuarioAtualizado = {

    ...usuario,

    experiencia: "Júnior"

};

console.log(usuarioAtualizado);

const usuarioSenior = {

    ...usuarioAtualizado,

    experiencia: "Senior"

};

console.log(usuarioSenior);