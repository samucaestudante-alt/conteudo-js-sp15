// Funções

// Arrow Functions

//function multiplicar(a, b) {
//    return a * b;
//}

//const multiplicar = function(a, b) {
//    return a * b;
//}

const multiplicar = (a, b) => a * b;

console.log(multiplicar(7, 4));

console.log("");

// Arrow Function com apenas um parâmetro

const numeroAoQuadrado = a => a * a;

console.log(numeroAoQuadrado(10));

console.log("");

// Arrow Function em Método de Objeto

const pessoa = {
    nome: "Samuel",
    idade: 19,
    cumprimentar: function () {
        return "Olá, eu sou o " + this.nome + " e tenho " + this.idade + " anos de idade.";
    },
};

console.log(pessoa.cumprimentar());