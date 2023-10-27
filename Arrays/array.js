console.log(typeof Array, typeof new Array, typeof [])

let aprovados = new Array('Bia', 'Carlos', 'Ana')
console.log(aprovados)

aprovados = ['Bia', 'Carlos', 'Ana']
console.log(aprovados[0], aprovados[1], aprovados[2]) // Bia Carlos Ana

aprovados[3] = 'Pedro'
aprovados.push('Bia') // adiciona um novo elemento
console.log(aprovados.length) // 5

aprovados[9] = 'Rafael'
console.log(aprovados.length) // 10
console.log(aprovados[8] === undefined) // true
console.log(aprovados) // [ 'Bia', 'Carlos', 'Ana', 'Pedro', 'Bia', <4 empty items>, 'Rafael' ]

aprovados.sort() // ordena o array por ordem alfabética: [ 'Ana', 'Bia', 'Bia', 'Carlos', 'Pedro', 'Rafael', <4 empty items> ]
console.log(aprovados)

delete aprovados[1] // deleta um elemento
console.log(aprovados)

aprovados = ['Bia', 'Carlos', 'Ana']
// splice(a, b) -> a = índice a ser excluído, b = quantos serão excluídos a partir dele
aprovados.splice(1, 2)
console.log(aprovados)