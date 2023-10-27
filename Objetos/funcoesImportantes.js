const pessoa = {
    nome: 'Diego',
    idade: 24,
    peso: 58
}

console.log(Object.keys(pessoa))
console.log(Object.values(pessoa))
console.log(Object.entries(pessoa))

Object.entries(pessoa).forEach(([c, v]) => {
    console.log(`${c}: ${v}`)
})

Object.defineProperty(pessoa, 'dataNascimento', {
    enumerable: true, // será listado?
    writable: false, // poderá ser alterado?
    value: '09/07/1999'
})

// Object.assign
const dest = { a: 1 }
const ob1 = { b: 2 }
const ob2 = { c: 3, a: 4 }
const ob = Object.assign(dest, ob1, ob2)
console.log(ob) // retornará { a: 4, b: 2, c: 3 }