//função soma com valores padrão
function soma1(a, b, c){
    a = a || 1
    b = b || 1
    c = c || 1
    return a + b + c
}

console.log(soma1(10, 5))
console.log(soma1())
console.log(soma1(2,2,2))
