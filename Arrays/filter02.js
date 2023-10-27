Array.prototype.filter2 = function(callback) {
    const newArray = []
    for (i = 0; i < this.length; i++) {
        if (callback(this[i], i, this)) {
            newArray.push(this[i])
        }
    }
    return newArray
}

const produtos = [
    { nome: 'Notebook', preco: 3200, fragil: true },
    { nome: 'iPad Pro', preco: 6899, fragil: true },
    { nome: 'Copo de vidro', preco: 12, fragil: true },
    { nome: 'Copo de plástico', preco: 5, fragil: false },
]

const caro = produto => produto.preco > 2500
const fragil = produto => produto.fragil

console.log(produtos.filter2(caro).filter2(fragil))