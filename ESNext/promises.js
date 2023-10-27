function falarDepoisDe (segundos, frase) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(frase) // o resolve chama o then
            reject(frase) // esse é o erro sendo tratado
        }, segundos * 1000)
    })
}

falarDepoisDe(3, 'Que legal!')
.then(frase => frase.concat('?!?')) // assim que a primeira etapa terminar, será chamado essa função then
.then(outraFrase => console.log(outraFrase))
.catch(e => console.log(e)) // aqui fazemos o tratamento do erro