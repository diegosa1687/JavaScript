// Object.preventExtensions não permite adicionar novos atributos
// apenas alterar ou deletar os já existentes

const produto = Object.preventExtensions({
    nome: 'Caneta', preco: 1.99, tag: 'promoção'
})
console.log('Extensível:', Object.isExtensible(produto)) // false

produto.nome = 'Lápis'
produto.quantidade = 10
delete produto.tag
console.log(produto) // { nome: 'Lápis', preco: 1.99 }

// Object.seal permite apenas alterar os dados existentes
const pessoa = Object.seal({
    nome: 'Juliana', idade: 32
})
console.log('Selado:', Object.isSealed(pessoa))