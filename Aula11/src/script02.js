// Objetos

// Objeto simples no JavaScript
const carro = {
    marca: "Porsche",
    modelo: 911,
    cor: "vermelho",
    ano: 2022,
};

console.log(carro.marca);
console.log(carro.modelo);
console.log(carro.cor);
console.log(carro.ano);

console.log("");

const pessoa = {
    nome: "Samuel",
    peso: 80,
    altura: 1.79,
    registro: 12345678910,
    idade: 19,
    emprego: true,
    exibirInformacoes: function () {
        let saidaEmprego;

        if (this.emprego === true) {
            saidaEmprego = "Sim;"
        } else {
            saidaEmprego = "Não";
        }

        return `
        Meu nome é: ${this.nome}
        Minha idade é: ${this.idade}
        Minha altura é: ${this.altura}
        Eu trabalho?:  ${saidaEmprego}
        Eu peso: ${this.peso} kg
        E meu número de registro é: ${this.registro}
        `;
    },
    
};

console.log(pessoa.exibirInformacoes());