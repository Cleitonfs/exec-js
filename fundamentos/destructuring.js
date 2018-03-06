const pessoa = {
    nome: 'Ana',
    idade: 5,
    logradouro: {rua: 'Rua ABC',
    numero:1000
    }
}

const {nome: n, idade: i, logradouro: {rua,numero}} = pessoa

console.log(n, i, rua, numero)