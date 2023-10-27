const escola = "Cod3r";

console.log(escola.charAt(4)); // retornara 'r'
console.log(escola.charCodeAt(4)); // retronará o código ascii do 'r'

console.log(escola.substring(1)); // retornará escola a partir do índice 1
console.log(escola.substring(0, 3)); // retornará escola do índice 0 até o índice 3

console.log("Escola: ".concat(escola).concat("!")); // irá concatenar
console.log("Escola: " + escola + "!"); // irá concatenar igual o de cima
console.log(escola.replace(3, "e")); // substituirá o elemento do índice 3 pelo elemento "e"

console.log('Ana,Maria,Pedro'.split(',')); // retornará um array separado por ',' (['Ana', 'Maria', 'Pedro'])


const nome = "Rebeca";
const concatenacao = "Olá, " + nome + "!";
const template = `Olá, ${nome}!`; // equivalente ao de cima, porém mais fácil de escrever
console.log(concatenacao, template);
console.log(`1 + 1 = ${1 + 1}`);

const up = texto => texto.toUpperCase();
console.log(`Ei... ${up('cuidado')}!`);