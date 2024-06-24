// Definir uma função que recebe como parâmetros a quantidade de vitórias e derrotas de um jogador.
//Calcular o saldo de partidas ranqueadas através da fórmula: saldo = vitórias - derrotas.
//Utilizar estruturas condicionais (if / else if / else) para determinar o nível do jogador com base no número de vitórias.
//Retornar uma mensagem formatada com o saldo de vitórias e o nível alcançado.



function calcularNivel(vitorias, derrotas) {

// Calcula o saldo de partidas ranqueadas
let saldoVitorias = vitorias - derrotas;

// Determina o nível com base no número de vitórias
let nivel;
if (vitorias < 10) {
    nivel = "Ferro";
} else if (vitorias >= 10 && vitorias <= 20) {
    nivel = "Bronze";
} else if (vitorias > 20 && vitorias <= 50 ) {
    nivel = "Prata";
} else if (vitorias > 50 && vitorias <= 80) {
    nivel = "Ouro";
} else if (vitorias > 80 && vitorias <= 90) {
    nivel = "Diamante";
} else if (vitorias > 90 && vitorias <=100) {
    nivel = "Lendario";
} else{
    nivel = "Imortal";
}

//Retorna a mensagem formatada
return `O Herói tem saldo de ${saldoVitorias} está no nível de ${nivel}`;
}

let resultado = calcularNivel(75, 25);
console.log(resultado);

