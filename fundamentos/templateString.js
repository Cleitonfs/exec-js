const nome = 'Rebeca'
const concatenacao = 'Olá ' + nome + '!'

const template = `

    Olá
    ${nome}!`

console.log(concatenacao, template)
console.log(`1 + 1 = ${1 + 1}`)

//Exemplificando o uso de funções dentro de template string

const up = texto => texto.toUpperCase()
console.log(`Ei...${up('cuidado')}!`)
