// laços de Repetição (Loops)

// Laço for
for (let acumuladora = 0; acumuladora <= 10; acumuladora++) {
    console.log(acumuladora);
}

console.log("");

const carros = ["Gol", "Porsche", "Opala", "Audi"];
let tamanhoArray = carros.length;

for (let acumuladora = 0; acumuladora < tamanhoArray; acumuladora++) {
    console.log(carros[acumuladora]);
}

console.log("");

let i, x = "";
for (i = 0; i <= 5; i++) {
    x = x + i;
}

console.log("");

// Laço while
let acumuladora = 0;

while (acumuladora <= 10) {
    console.log(acumuladora);
    acumuladora++;
}

console.log("");

// Laço Do While

let acumuladora2 = 0;

do {
    console.log(acumuladora2);
    acumuladora2++;
} while (acumuladora2 <= 10);

console.log("");

// Calculadora com Do While


do {

    alert("Calculadora");
    let numero1 = parseFloat(prompt("Informe primeiro o número do cálculo: "));
    let operador = prompt("Informe o operador aritmético");
    let numero2 = parseFloat(prompt("Informe o segundo número do cálculo: "));

    switch (operador) {

        case"+":
            let soma = numero1 + numero2;
            alert(`${numero1} + ${numero2} = ${soma}`);
            break;
        
        case"-":
            let subtracao = numero1 - numero2;
            alert(`${numero1} - ${numero2} = ${subtracao}`);
            break;

        case"*":
            let multiplicacao = numero1 * numero2;
            alert(`${numero1} * ${numero2} = ${multiplicacao}`);
            break;
        
        case"/":
            let divisao = numero1 / numero2;
            alert(`${numero1} / ${numero2} = ${divisao}`);
            break;
        
    }
    condicao = prompt("Você Deseja continuar calculo (s/n)?");
} while (condicao === "s" || condicao === "S");