// Objetos

// Construtores de Objetos

// const pessoa = {
//     nome: "Samuel",
//     sobrenome: "Paulo",
//     idade: 19,
//     altura: 1.75,
// };

function Pessoa(nome, sobrenome, idade, altura) {
    this.nomePessoa = nome;
    this.sobrenomePessoa = sobrenome;
    this.idadePessoa = idade;
    this.alturaPessoa = altura;
}

const minhaPessoa = new Pessoa("Samuel", "Paulo", 19, 1.75);

console.log(minhaPessoa);

const meuIrmao = new Pessoa("Martins", "Araujo", 18, 1.75);
