//Primeira forma
const obj = {}
console.log(obj)

//Segunda forma
const obj2 = new Object
console.log(obj2)

//Terceira forma
function Produto(nome, preco, desc) {
    this.nome = nome //aqui o atributo tona-se publico
    this.getPrecoComDesconto = () => {
        return preco * (1 - desc)
    }
}
const p1 = new Produto('Caneta', 7.99, 0.15)
const p2 = new Produto('Notebook', 7990, 0.07)
console.log(p1.getPrecoComDesconto(), p2.getPrecoComDesconto())

//Quarta forma : funcao factory

function criarFuncionario(nome, salarioBase, faltas) {
    return {
        nome,
        salarioBase,
        faltas,
        getSalario() {
            return (salarioBase / 30) * (30 - faltas)
        }
    }
}

const func1 = criarFuncionario('Joao', 7980, 4)
const func2 = criarFuncionario('Maria', 11400, 2)
console.log(func1.getSalario(), func2.getSalario())

//QUinta forma usando Create
const filha = Object.create(null)
filha.nome = 'Ana'
console.log(filha)

//Sexta forma: Json.parse!!

const fromJSON = JSON.parse('{"info":"Sou um JSON"}')
console.log(fromJSON.info)

