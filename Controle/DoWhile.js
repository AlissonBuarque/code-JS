function getInterioAleatorioEntre(min, max) {
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)
}

let opcao = -1

//Abertura do bloco
 do {
    opcao = getInterioAleatorioEntre(-1, 10)
    console.log(`Opção escolhida foi ${opcao}.`)
} while (opcao != -1) // A unica estrutura no qual a expreçao esta depois do bloco

console.log('Ate a proxima')