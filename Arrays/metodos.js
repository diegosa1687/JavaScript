const pilotos = ['Vettel', 'Alonso', 'Raikkonen', 'Massa']
pilotos.pop() // remove o último elemento
console.log(pilotos) // ['Vettel', 'Alonso', 'Raikkonen']

pilotos.push('Verstappen') // adiciona um novo elemento no array
console.log(pilotos)

pilotos.shift() // exclui o primeiro elemento do array
console.log(pilotos)

pilotos.unshift('Hamilton') // adiciona um novo elemento no início do array
console.log(pilotos)

// splice pode adicionar e remover elementos ao mesmo tempo
pilotos.splice(2, 0, 'Botas', 'Massa') // nesse caso ele vai adicionar dois elementos a partir da posição 2
console.log(pilotos)

pilotos.splice(3, 1)
console.log(pilotos)

const algunsPilotos = pilotos.slice(2) // pilotos a partir do índice 2
console.log(algunsPilotos)

const algunsPilotos2 = pilotos.slice(1, 4) // pilotos entre os índices 1 e 4
console.log(algunsPilotos2)