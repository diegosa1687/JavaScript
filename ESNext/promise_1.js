const nomes = ['Ana', 'Bia', 'Carol', 'Diego']

let p = new Promise(function(cumprirPromessa) {
    cumprirPromessa(nomes)
})

const primeiroElemento = nomes => nomes[0]
const primeiraLetra = nome => nome[0]
const minusculo = letra => letra.toLowerCase()

p
.then(primeiroElemento)
.then(primeiraLetra)
.then(minusculo).then(console.log)