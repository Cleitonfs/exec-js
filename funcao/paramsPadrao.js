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

//passando parametros padrão com outras estratégias
function soma2(a, b, c){
    a = (a !== undefined) ? a : 1
    b = 1 in arguments ? b : 1
    c = isNaN(c) ? 1 : c
    return a + b + c
}
console.log(soma2(10, 5))
console.log(soma2())
console.log(soma2(2,2,2))
console.log(soma2(0,0,0))

function soma2(a=1, b=1, c=1){
    
    return a + b + c
}
console.log(soma2(10, 5))
console.log(soma2())
console.log(soma2(2,2,2))
console.log(soma2(0,0,0))