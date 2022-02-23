// Array de formas literais com 4 posiçoes
const valores = [7.7, 8.9, 6.3, 9.2];
console.log(valores[0], valores[3]); //Acessando elementos 
console.log(valores[4]); //indice que nao existe retorna undefined

//Adicionando um elemento em um array
valores[4] = 10
console.log(valores)
console.log(valores.length) //Acessando quantidades de elementos

//Adicionar novos(multiplos) elementos em um array
valores.push({id: 3}, false, null,'teste')
console.log(valores)

// Formas de excluir elemento de uma array
console.log(valores.pop())
delete valores[0]
console.log(valores)

console.log(typeof valores)