function getInteiroAleatorioEntre(min, max) {
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)  
}

let opcao = 0
let cont = 0

while(opcao != -1) {
    opcao = getInteiroAleatorioEntre(-100, 100)
    console.log(`A opção escolhida foi ${opcao}.`)
    cont++
}   
console.log('Foram gerados ' + cont + ' numeros aleatórios')
console.log('Até a próxima!')