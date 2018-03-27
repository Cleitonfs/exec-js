let dobro1 = function (a){
    return 2 * a

}

dobro2 = (a) => {
    return 2 * a
}

dobro3 = a => 2 * a


console.log(dobro1(2))
console.log(dobro2(3))
console.log(dobro3(4))

let ola = function () {
    return 'Ola'
}

ola = () => 'Ola'

ola = _ => 'Ola'
console.log(ola())