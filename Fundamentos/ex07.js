// bhaskara

function bhaskara(a, b, c) {
    let delta = Math.pow(b, 2) - (4 * a * c);
    if (delta >= 0) {
        let x1 = ((-b + Math.sqrt(delta)) / (2 * a)).toFixed(2);
        let x2 = ((-b - Math.sqrt(delta)) / (2 * a)).toFixed(2);
        return [x1, x2];
    } else return "delta negativo";
}

console.log(bhaskara(-1, 1, 4));