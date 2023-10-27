const times = new Set()
times.add('Vasco')
times.add('São Paulo').add('Palmeiras')
times.add('Vasco') // não aceita repetição

console.log(times)
console.log(times.size)
console.log(times.has('vasco')) // false, camel case
times.delete('Palmeiras')
console.log(times.has('Palmeiras'))