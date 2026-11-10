// Funções

// Função de Multiplicação
function multiplicar(a, b) {
    return a * b;
}

console.log(multiplicar(2, 3));
console.log(multiplicar(10, 5));
console.log("");

// Função Adição
function soma(a, b) {
    return a + b;
}

console.log(soma(2, 3));
console.log(soma(10, 5));
console.log("");

// Função Subtração
function subtracao(a, b) {
    return a - b;
}

console.log(subtracao(3, 2));
console.log(subtracao(10, 5));
console.log("");

// Função Dividir
function divisao(a, b) {
    return a / b;
}

console.log(subtracao(3, 2));
console.log(subtracao(10, 5));
console.log("");

// Função com um parâmetro
function paraCelsius(grausFahrenheit) {

    let calculoConversao = (5/9) * (grausFahrenheit - 32);
    return `${grausFahrenheit}º Fahrenheit convertido para Celsius é igual a: ${calculoConversao}ºC`;
}

console.log(paraCelsius(212));