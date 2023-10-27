// com promises...
const http = require('http')

const getTurma = (letra, callback) => {
    const url = `http://files.cod3r.com.br/curso-js/turma${letra}.json`
    return new Promise((resolve, reject) => {
        http.get(url, res => {
            let resultado = ''
            res.on('data', dados => {
                resultado += dados
            })
    
            res.on('end', () => {
                try { resolve(JSON.parse(resultado)) }
                catch (e) { reject(e) }
            })
        })
    })
}

// no Promise.all([...]) ele resolve primeiro todas as promises antes de começar a chamar os métodos then
// o resultado é igual o anterior, só que mais simples e elegante
Promise.all([getTurma('A'), getTurma('B'), getTurma('C')])
    .then(turmas => [].concat(...turmas))
    .then(alunos => alunos.map(aluno => aluno.nome))
    .then(nomes => console.log(nomes))
    .catch(e => console.log(e.message))