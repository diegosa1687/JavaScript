const contadorA = require('./instanciaunica')
const contadorB = require('./instanciaunica')

const contadorC = require('./instancianova')()
const contadorD = require('./instancianova')()

// exemplo instância única
contadorA.incValor()
contadorA.incValor()
console.log(contadorB.valor) // retornará 3, pois o que é feito em contadorA afeta contadorB

// exemplo instância nova
contadorC.incValor()
contadorC.incValor()
console.log(contadorD.valor) // retornará 1, pois o que é feito em contadorC não afeta contadorD