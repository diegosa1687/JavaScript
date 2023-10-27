const fs = require('fs')

const caminho = __dirname + '/arquivo.json'

// sincrono...
// significa que primeiro ele vai carregar os arquivos antes de dar
// continuidade ao código
const conteudo = fs.readFileSync(caminho, 'utf-8')
console.log(conteudo)

// assincrono...
// significa que ele dá continuidade ao código
// antes mesmo de ter todos os arquivos carregados
fs.readFile(caminho, 'utf-8', (err, conteudo) => {
    const config = JSON.parse(conteudo)
    console.log(`${config.db.host}:${config.db.port}`)
})

const config = require('./arquivo.json')
console.log(config.db)

fs.readdir(__dirname, (err, arquivos) => {
    console.log('conteúdo da minha pasta atual:')
    console.log(arquivos)
})