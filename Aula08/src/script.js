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