const aprovados = ['Agatha', 'Ana', 'Pedro', 'André']

aprovados.forEach(function(nome, indice, array) { // um array pode passar 3 índices como parâmetro
    console.log(`${indice + 1}: ${nome}`)
    console.log(array)
})

aprovados.forEach(nome => {
    console.log(nome)
})

const exibirAprovados = aprovado => console.log(aprovado)
aprovados.forEach(exibirAprovados)