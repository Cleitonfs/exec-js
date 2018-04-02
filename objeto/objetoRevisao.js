
const produto = new Object
produto.nome = 'Cadeira'
produto['Marca do produto'] = 'Generica'
produto.preco = 220

//console.log(produto)

const carro = {
    modelo: 'A5',
    valor: 100000,
    proprietario: {
        nome: 'Raul',
        idade: 56,
        endereco: {
            logradouro: 'Rua Anc',
            numero: 23
        }
    }, 
    condutores: [{
        nome: 'Junior',
        idade:19
    }, {
            nome: 'Ana',
            idade: 45
        }], 
        calcularValorSeguro: function() {
            //...
        }
}

carro.proprietario.endereco.numero = 1000
carro['proprietario']['endereco']['logradouro'] = 'Av. Gigante'
//console.log(carro)

delete carro.condutores
delete carro.proprietario.endereco
delete carro.calcularValorSeguro

console.log(carro)



