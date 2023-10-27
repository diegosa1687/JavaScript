const tecnologias = new Map()
tecnologias.set('react', { framework: false })
tecnologias.set('angular', { framework: true })

console.log(tecnologias.get('react'))
console.log(tecnologias.get('react').framework)

const chavesVariadas = new Map([
    [function () {}, 'funcao'],
    [{}, 'objeto'],
    [123, 'numero']
])

chavesVariadas.forEach((vl, ch) => {
    console.log(vl, ch)
})