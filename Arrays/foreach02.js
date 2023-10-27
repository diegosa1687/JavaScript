Array.prototype.forEach2 = function(callback) {
    for (let i = 0; i < this.length; i++) { callback(this[i], i, this) }
}

const aprovados = ['Agatha', 'Ana', 'Pedro', 'André']

aprovados.forEach2(function(nome, indice) { // um array pode passar 3 índices como parâmetro
    console.log(`${indice + 1}: ${nome}`)
})