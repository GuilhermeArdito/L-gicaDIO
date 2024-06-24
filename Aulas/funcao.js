torrar("pão de forma")
torrar("pão integral")

function torrar(pao){
    console.log("Torrada feita com " + pao)
}

let resultado = soma(5, 10)

console.log("O resultado dessa função é " + resultado)

function soma (numA, numB){
    let somatorio = numA + numB
    return somatorio
}



let userName = getFirstName("Guilherme Biagioni Ardito")

console.log("Seja bem vindo " + userName)

function getFirstName(name){
    let firstName = name.split(" ")[0]
    return firstName
}