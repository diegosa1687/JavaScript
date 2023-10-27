// classificação do triângulo

function triangulo (a, b, c) { if (a < (b + c) && b < (a + c) && c < (a + b)) return true; else return false; }

function classificaTriangulo (a, b, c) {
    if (triangulo(a, b, c)) {
        if (a == b && a == c) return "equilátero";
        if (a == b || a == c) return "isósceles";
        if (a != b && a != c) return "escaleno";
    } else return "não é um triângulo.";
}

console.log(classificaTriangulo(2, 2, 3));