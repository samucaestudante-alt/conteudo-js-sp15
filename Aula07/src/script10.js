// Escreva um algoritmo para ler um valor (do teclado) e escrever (na tela) o seu antecessor.

alert("Antecessor de valor informado pelo usúario.");
let valorInformado = parseInt(prompt("Informe um número inteiro para retornar o seu antecessor: "));

let antecessor = valorInformado - 1;

alert("O valor antecessor de" + " é " + antecessor);