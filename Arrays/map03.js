Array.prototype.map2 = function(callback) {
    const newArray = []
    for(let i = 0; i < this.length; i++) {
        newArray.push(callback(this[i], i, this))
    }
    return newArray
}

const nums = [1, 2, 3, 4, 5]
let resultado = nums.map2(function(e) { return e * 2 })
console.log(resultado)