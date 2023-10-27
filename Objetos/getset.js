const sequencia = {
    _valor: 1, // convenção de que essa variável só pode ser acessada dentro do objeto
    get valor() { return this._valor++; },
    set valor(v) { if (v > this._valor) this._valor = v }
}

console.log(sequencia.valor, sequencia.valor);
sequencia.valor = 3
console.log(sequencia.valor, sequencia.valor)