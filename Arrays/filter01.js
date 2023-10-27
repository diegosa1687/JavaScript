const produtos = [
    { nome: 'Notebook', preco: 3200, fragil: true },
    { nome: 'iPad Pro', preco: 6899, fragil: true },
    { nome: 'Copo de vidro', preco: 12, fragil: true },
    { nome: 'Copo de plástico', preco: 5, fragil: false },
]

console.log(produtos.filter(function (p) {
    return p.fragil == false
}))

const caro = produto => produto.preco > 2500
const fragil = produto => produto.fragil

console.log(produtos.filter(caro).filter(fragil))