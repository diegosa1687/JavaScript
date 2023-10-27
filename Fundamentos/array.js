const valores = [23, 543, 7.6, 'diego'];
console.log(valores);
console.log(valores[3]);
console.log(valores.length); // tamanho do array
valores.push('sa', 'leoncio', true, {id: 5}); // inclui novos elementos no array
console.log(valores.pop()); // exclui o último elemento do array
delete valores[0]; // exclui o elemento na posição 0, nesse caso a posição continua existindo, porém vazio (<1 empty item>)
console.log(typeof valores); // é um objeto