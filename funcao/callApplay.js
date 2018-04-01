function getPreco (moeda = 'R$', imposto = 0) {
    return `${moeda} ${this.preco * (1 - this.desc) * (1 + imposto)}`

}

const produto = {
    nome: 'NOtebook',
    preco: 4890,
    desc: 0.15,
    getPreco

}

console.log(getPreco())
console.log(produto.getPreco())

const carro = {preco: 52000, desc: 0.20}

console.log(getPreco.call(carro))
console.log(getPreco.apply(carro))

console.log(getPreco.call(carro, '$', 0.17))

console.log(getPreco.apply(carro, ['$', 0.17]))
