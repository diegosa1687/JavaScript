// tagged templates - processa o template dentro de uma função

function tag(partes, ...valores) {
    console.log(partes)
    console.log(valores)
}

const aluno = 'Gui'
const situacao = 'aprovado'
console.log(tag `${aluno} está ${situacao}.`)

function real (partes, ...valores) {
    const resultado = []
    valores.forEach((valor, indice) => {
        valor = isNaN(valor) ? valor : `R$${valor.toFixed(2)}`
        resultado.push(partes[indice], valor)
    })
    return resultado.join('')
}

const preco = 29.99
const precoParcela = 11
console.log(real `1x de ${preco} ou 3x de ${precoParcela}`)