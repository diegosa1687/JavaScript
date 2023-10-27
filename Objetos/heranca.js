// todos os objetos em javascript são filhos de Object.prototype

const avo = { atributo1: 'A' }
const pai = { __proto__: avo, atributo2: 'B' }
const filho = { __proto__: pai, atributo3: 'C' }
const irmao = { __proto__: pai, atributo4: 'D' }

console.log(filho.atributo2, irmao.atributo2)

const carro = {
    velAtual: 0,
    velMax: 200,
    acelerarMais(delta) {
        if (this.velAtual + delta <= this.velMax) this.velAtual += delta
        else this.velAtual = this.velMax
    },
    status() {
        return `${this.velAtual}Km/h de ${this.velMax}Km/h`
    }
}

const ferrari = {
    __proto__: carro,
    modelo: 'F40',
    velMax: 324,
    status() { return `${this.modelo}: ${super.status()}` }
}

const volvo = {
    modelo: 'V40',
    velMax: 200,
    status() { return `${this.modelo}: ${super.status()}` }
}

const fusca = Object.create(carro)
fusca.modelo = '1987'
fusca.velMax = 150
fusca.status()
console.log(fusca)

Object.setPrototypeOf(volvo, carro)

console.log(ferrari.__proto__ === Object.prototype)
console.log(volvo.__proto__ === Object.prototype)

console.log(ferrari.status())
console.log(volvo.status())

function MeuObjeto() {}

const ob1 = new MeuObjeto
const ob2 = new MeuObjeto

console.log(ob1, ob2)

MeuObjeto.prototype.nome = 'Anônimo'
MeuObjeto.prototype.falar = function() { console.log(`Olá, meu nome é ${this.nome}!`) }

ob1.nome = 'Diego'
ob2.nome = 'Núbia'
ob1.falar()
ob2.falar()

// resumindo a loucura
console.log((new MeuObjeto).__proto__ === MeuObjeto.prototype)
console.log(MeuObjeto.__proto__ === Function.prototype)
console.log(Function.prototype.__proto__ === Object.prototype)
console.log(Object.prototype.__proto__ === null)