const soma = function (x, y) {
    return x + y 
}

/*imprimirResultado recebe uma função anônima com três parâmetro sendo que o
último deles é uma função (soma)*/
const imprimirResultado = function (a, b, operacao = soma) {
    console.log(operacao(a, b))
}

imprimirResultado(3, 4)
imprimirResultado(3, 4, soma)

//passando o terceiro parâmetro como uma arrow function 
imprimirResultado(3, 4, (x, y) => x * y)

const pessoa = {
    falar : function () {
        console.log('Olá!')
    }
}
pessoa.falar()

//outra sintaxe válida e mais moderna
const pessoa2 = {
    falar() {
        console.log('Olá!')
    }
}
pessoa2.falar()
