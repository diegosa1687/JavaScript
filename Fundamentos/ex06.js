// juros simples e juros compostos

function jurosSimples (capitalInicial, i, t) {
    let m = capitalInicial * (1 + (i / 100) * t);
    console.log(`Juros simples: R$${m.toFixed(2)}`);
}

function jurosCompostos (capitalInicial, i, t) {
    let m = capitalInicial * Math.pow((1 + (i / 100)), t);
    console.log(`Juros compostos: R$${m.toFixed(2)}`);
}

jurosSimples(1200, 20, 5);
jurosCompostos(1200, 20, 5);