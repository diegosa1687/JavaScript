const obj1 = {}
console.log(typeof obj1)

const obj2 = new Object
console.log(typeof obj2)

// funções construtoras
function Produto(nome, valor, desc) {
    this.nome = nome
    this.getPrecoComDesconto = () => {
        return valor * (1 - desc)
    }
}

const p1 = new Produto('Caneta', 9.89, 0.10)
const p2 = new Produto('Caderno', 44.99, 0.15)

console.log(p1.getPrecoComDesconto())
console.log(p2.getPrecoComDesconto())

// função Factory
function criarFuncionario(nome, salarioBase, faltas) {
    return {
        nome, salarioBase, faltas,
        getSalario() { return (salarioBase / 30) * (30 - faltas) }
    }
}

const func1 = criarFuncionario('Diego', 7899, 2);
console.log(func1.getSalario())

// Object.create
const filha = Object.create(null)
filha.nome = 'Joana'
console.log(filha)

// JSON.parse
const fromJSON = JSON.parse('{"info": "Sou um JSON.parse"}')
console.log(fromJSON.info)

const pessoa = { nome: 'diego' }
console.log(pessoa.nome)
pessoa.nome = 'nubia'
console.log(pessoa.nome)
Object.freeze(pessoa) // isto fará com que os valores desse objeto tornem-se constantes
// e mais, não poderás criar e nem deletar um novo atributo para esse objeto
console.log('continua sendo', pessoa.nome)