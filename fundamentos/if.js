function soBoaNoticia(nota){
    if (nota >= 7){
        console.log("Aprovado com " + nota)
    } else {
        console.log("Você está em recuperação, e precisa tirar " + nota + " na final")
    }
}

soBoaNoticia(8.6)
soBoaNoticia(6.5)
 
function seForVerdadeEuFalo(valor){
    if(valor){
        console.log('É vendade...' + valor)
    }
}
seForVerdadeEuFalo(10)