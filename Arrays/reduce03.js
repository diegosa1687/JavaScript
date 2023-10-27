Array.prototype.reduce2 = function(callback) {
    let acumulador = this[0]
    for(let i = 1; i < this.length; i++) {
        acumulador = callback(acumulador, this[i], i, this)
    }
    return acumulador
}

const alunos = [
    { nome: 'João', nota: 7.3, bolsista: false },
    { nome: 'Pedro', nota: 3.5, bolsista: true },
    { nome: 'Maria', nota: 9.8, bolsista: true },
    { nome: 'Lúcia', nota: 7.9, bolsista: false },
]

const todosBolsistas = (resultado, bolsista) => resultado && bolsista
const algumBolsista = (resultado, bolsista) => resultado || bolsista

const resultadoTodosBolsistas = alunos.map(a => a.bolsista).reduce2(todosBolsistas)
const resultadoAlgumBolsista = alunos.map(a => a.bolsista).reduce2(algumBolsista)

console.log(resultadoTodosBolsistas)
console.log(resultadoAlgumBolsista)