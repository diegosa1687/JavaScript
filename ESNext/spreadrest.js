// operador ... rest (juntar) / spread (espalhar)
// usar rest como parâmetro de uma função

// exemplos spread = espalhar
const funcionario = { nome: 'joao', salario: 1287.44 }
const clone = { ativo: true, ...funcionario }
console.log(clone)

const grupoA = ['joao', 'maria', 'pedro']
const grupoB = ['gloria', ...grupoA, 'rafaela']
console.log(grupoB)