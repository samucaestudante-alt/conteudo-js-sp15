// Exerciício: Calculando área do Trapézio.

alert("Área de Trapézio");

let baseMaior = parseFloat(prompt("Informe a Base Maior: "));

let baseMenor = parseFloat(prompt("Informe a Base Menor: "));

let altura = parseFloat(prompt("Informe a Altura: "));

let a1 = baseMaior + baseMenor;

let a2 = a1 * altura;

let a3 = a2 / 2;

alert("A área total do trapézio " + "em cm é: " + a3 + "cm²");