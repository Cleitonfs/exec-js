
function criarProduto(nome, preco, desconto = 0.05) {
    return {
        nome,
        preco,
        desconto
        }
    }
console.log(criarProduto('Produto 1', 200.0))
console.log(criarProduto('Produto 2', 1000))