const porta = 3030
const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const bancoDeDados = require('./bancoDeDados')

// app.use((req, res, next) => { // nesse caso ele vai atender para quaquer requisição que for feita
//     res.send({nome: 'Notebook', preco: 1348.99}) // converter parar JSON
// })

app.use(bodyParser.urlencoded({ extended: true }))

app.get('/produtos', (req, res, next) => { // requição para localhost:3030/produtos
    res.send(bancoDeDados.getProdutos()) // converter parar JSON
})

app.get('/produtos/:id', (req, res, next) => {
    res.send(bancoDeDados.getProduto(req.params.id))
})

app.post('/produtos', (req, res, next) => {
    const produto = bancoDeDados.salvarProduto({
        name: req.body.name,
        preco: req.body.preco
    })
    res.send(produto)
})

app.put('/produtos/:id', (req, res, next) => {
    const produto = bancoDeDados.salvarProduto({
        id: req.body.id,
        name: req.body.name,
        preco: req.body.preco
    })
    res.send(produto)
})

app.delete('/produtos/:id', (req, res, next) => {
    const produto = bancoDeDados.deleteProduto(req.params.id)
    res.send(produto) // JSON
})

app.listen(porta, () => {
    console.log(`Servidor está executando na porta ${porta}.`)
})