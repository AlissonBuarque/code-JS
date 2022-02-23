let valor //nao inicializada
console.log(valor)

valor = null //ausencia de valor
console.log(valor)
// console.log(valor.substring()) //Erro
//Sempre utilizar nulo caso queira zerar o valor de uma variavel

const produto =  {}
console.log(produto.preco)
console.log(produto)

produto.preco = 3.50
console.log(produto)

produto.preco = undefined //evitar atribuir undefined
console.log(!!produto.preco)
//delete produto.preço
console.log(produto)

produto.preco = null // sem preço
console.log(!!produto.preco)
console.log(produto)