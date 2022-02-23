const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// inicio do laço corrente
for (x in nums) {
    if (x == 5) {
        break //Break - desvio de fluxo pra fora do laço(corrente)
    }
    console.log(`${x} = ${nums[x]}`)
} // fim do laçp corrente

for (y in nums) {
    if (y == 5) {
        continue // Continue - Interrompe a repetiçao corrente e vai para proxima repetiçao
    }
    console.log(`${y} = ${nums[y]}`)
}

// Nao usar esse tipo de extrutura 
externo: for (s in nums) {
    for (b in nums) {
        if(a == 2 && b == 3) break externo
        console.log(`Par = ${a},${b}`)
    }
}
