let contador = 1;
console.log("\nContagem com while:");
while (contador <= 3) {
  console.log("Passo", contador);
  contador++;
}

console.log("\nContagem com do...while:");
let numero = 5;
do {
  console.log("Número atual é:", numero);
  numero--;
} while (numero > 0);

console.log("\n--- Fim do programa ---");