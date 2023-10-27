const filhas = ['Júlia', 'Maria']
const filhos = ['João', 'Cláudio']

const todos = filhas.concat(filhos, 'Diego') // concatena os dois e add um novo elemento
console.log(todos)

console.log([].concat([1, 2], [3, 4], [[1, 2], [3, 4]]))