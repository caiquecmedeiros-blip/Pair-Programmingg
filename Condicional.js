let dia = 3; // 1 = segunda, 2 = terça, 3 = quarta...
console.log("\nDia da semana (usando switch):");

switch (dia) {
  case 1:
    console.log("Segunda-feira");
    break;
  case 2:
    console.log("Terça-feira");
    break;
  case 3:
    console.log("Quarta-feira");
    break;
  case 4:
    console.log("Quinta-feira");
    break;
  case 5:
    console.log("Sexta-feira");
    break;
  default:
    console.log("Fim de semana!");
    break;
}