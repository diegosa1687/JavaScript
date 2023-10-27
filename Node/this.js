console.log('global', this === global)
console.log('module', this === module)
console.log('module.exports', this === module.exports)
console.log('exports', this === exports)

function logThis () {
    console.log('dentro de uma função')
    console.log('exports', this === exports)
    console.log('module.exports', this === module.exports)
    console.log('global', this === global)
}

logThis()