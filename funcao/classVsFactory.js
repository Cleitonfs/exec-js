//criando a partir de uma classe
class Pessoa {
    constructor(nome){
        this.nome = nome
    }

    falar() {
        console.log(`Meu nome é ${this.nome}`)
    }
}

const p1 = new Pessoa('Joao')
p1.falar()


//criando a partir de uma factory
const criarPessoa = nome => {
    return {
        falar: () => console.log(`Meu nome é ${nome}`)
    }
}

const p2 = criarPessoa('Maria')
p2.falar()


//criando a partir de uma função construtora
function criarProduto(nome) {
   this.nome = nome

   this.informar = function () {
        console.log(`Meu nome é ${this.nome}`)
   }
}

const produto = new criarProduto('ProdutoX')
produto.informar()
