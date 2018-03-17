
const pessoa = {
    nome: 'Ana',
    sobrenome:'Maria',
    idade:'40',
    peso:'60'
}

for (let atributo in pessoa){
    console.log(`${atributo} = ${pessoa[atributo]}`)
}