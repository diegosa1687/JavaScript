const carrinho = [
    '{"nome": "Borracha", "preco": 3.45}',
    '{"nome": "Caderno", "preco": 34.45}',
    '{"nome": "Kit de lápis", "preco": 7.99}',
    '{"nome": "Caneta", "preco": 4.49}'
]

const converterJSON = json => JSON.parse(json)
const retornaPreco = produto => produto.preco
const precos = carrinho.map(converterJSON).map(retornaPreco)
console.log(precos)