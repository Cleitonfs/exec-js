let isAtivo = true

console.log(isAtivo)

isAtivo = 1
console.log(!!isAtivo)
console.log(!!3)
console.log(!!-1)
console.log(!!' ')
console.log(!!'texto')
console.log(!![])
console.log(!!Infinity)
console.log(!!(isAtivo = 1))

console.log(!!'')
console.log(!!0)
console.log(!!null)
console.log(!!NaN)
console.log(!!undefined)

console.log(!!('' || null || ' '))

let nome = ''
console.log(nome || 'Desconhecido')
