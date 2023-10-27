for (let letra of 'Diego') // percorre pegando os valores
    console.log(letra)

const assuntosEcma = ['Map', 'Set', 'Promise']

console.log('for in')
for (let i in assuntosEcma) // percorre poegando os índices
    console.log(i)

console.log('for of')
for (let assunto of assuntosEcma)
    console.log(assunto)

const assuntosMap = new Map([
    ['Map', { abordado: true }],
    ['Set', { abordado: true }],
    ['Promise', { abordado: true }]
])

console.log('assuntosMap')
for (let assunto of assuntosMap)
    console.log(assunto)

console.log('assuntosMap.keys')
for (let chaves of assuntosMap.keys())
    console.log(chaves)

console.log('assuntosMap.values')
for (let valor of assuntosMap.values())
    console.log(valor)

console.log('assuntosMap.entries')
for (let [ch, vl] of assuntosMap.entries()) // também é possível pegar dois valores simultâneos
    console.log(ch, vl)