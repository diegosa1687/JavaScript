const alunos = [
    { nome: 'João', nota: 7.3, bolsista: false },
    { nome: 'Pedro', nota: 3.5, bolsista: true },
    { nome: 'Maria', nota: 9.8, bolsista: true },
    { nome: 'Lúcia', nota: 7.9, bolsista: false },
]

const resultado = alunos.map(a => a.nota).reduce(function(acumulador, atual) {
    console.log(acumulador, atual)
    return acumulador + atual
}, 10) // é possível passar um valor inicial para essa função

console.log(resultado) // resultado recebe o resultado de todas essas operações