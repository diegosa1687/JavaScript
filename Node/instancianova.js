module.exports = () => { // para ser uma intância única é fundamental que tenha ()
    return {
        valor: 1,
        incValor() {
            this.valor++
        }
    }

    // e por isso deve haver um return aqui para poder funcionar

    // esse de baixo não funciona para instâncias únicas
    // valor: 1,
    // incValor() {
    //     this.valor++
    // }
    
}