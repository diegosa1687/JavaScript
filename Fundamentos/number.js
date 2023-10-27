const peso1 = 1.0;
const peso2 = Number('2.0');

console.log(peso1, peso2);
console.log(Number.isInteger(peso1)); // true
console.log(Number.isInteger(peso2)); // true

const avaliacao1 = 9.765;
const avaliacao2 = 7.435;

const total = avaliacao1 * peso1 + avaliacao2 * peso2;
const media = total / (peso1 + peso2);
console.log(media.toFixed(2)); // duas casas decimais
console.log(media.toString(2)) // o parâmetro 2 converte para binário

console.log(1/0); // retornará o tipo -infinity-
console.log("10"/2); // retornará 5
console.log(typeof ("10"/2)); // retornará number
console.log("show" * 2); // retornará NaN (erro)
console.log(0.1 + 0.7); // retornará 0.7999999999