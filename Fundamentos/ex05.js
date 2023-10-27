// formatar em dinheiro

function reais (valor) {
    return `R$${valor.toFixed(2).toString().replace('.', ',')}`;
}

console.log(reais(0.1 + 0.2));