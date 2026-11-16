// Objetos

// Acessando Propriedades
const pessoa = {
    nome: "Samuel",
    idade: 19,
};

let notacaoEmPonto = pessoa.nome;
console.log(notacaoEmPonto);

let meuUltimoNomePropriedade = "ultimoNome"
let acessoColchetes = pessoa["ultimoNomePropriedade"];
console.log(acessoColchetes);

console.log("");

// Atualizando, Criando e Apagando propriedades de objeto
pessoa.nome = "Paulo";
console.log(pessoa.nome);

pessoa.anoNascimento = 2006;
console.log(pessoa.anoNascimento);
console.log(pessoa.ultimoNome);

console.log("");

// Verificando existência de propriedades em objetos
let resultado = ("altura" in pessoa);

console.log(resultado);
console.log("");

// Objetos Aninhados
const pessoa2 = {
    nome: "Samuel",
    idade: 19,
    meuCarro: {
        marca: "Porsche",
        modelo: "718 GT4",
        ano: 2022,
    },
};

console.log(pessoa2);
console.log(pessoa2.meuCarro);
console.log("");

// Método em Objetos
const carro = {
    marca: "Nissan",
    modelo: "GT-R",
    ano: 2024,
    acelerar: function () {
        return `O ${this.marca} ${this.modelo} acelerou.`;
    }
};

console.log(carro.acelerar());

console.log("");

// Adicionando Método em um Objeto
carro.estacionar = function () {
    return `O ${this.marca} ${this.modelo} estacionar`;
};

console.log(carro.estacionar());