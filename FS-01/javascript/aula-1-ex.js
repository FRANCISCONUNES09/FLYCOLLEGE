// Criar uma algoritimo que calcule a média de consumo de gasolina de um carro.
// com base no consumo mensal.
// julho - 670L
// Rodou 1000km
// Por dia qual a média de litros gastos?

// const consumoMensal = 670;
// const distanciaMensal = 1000;
// const diasNoMes = 31;

// const calcMediaLitros = consumoMensal / diasNoMes;

// console.log(`O resultado da media é: ${calcMediaLitros}`)


// criar um algoritimo que calcule a area de uma parede.
// Com base na largura e altura.

// const altura = 4.30;
// const largura = 10.70;

// const area = largura * largura;

// console.log(`A área da parede é: ${area.toFixed(2)m2}`)

// Criar um algoritimo que calcule a area de uma parede e me diga
// Quantos litros de tinta eu preciso para pintar a partida.
// Sabendo que cada litro de tinta pinta 3m2.
// const altura = 5.40;
// const largura = 8.50;
// const tinta = 3;

// const area = altura * largura;
// const litrosTinta = area / tinta;

// console.log(`
//     A área da parede é: ${area.toFixed(2)}m2
//     você precisa de ${litrosTinta.toFixed(2)} litros de tinta
// `)

// const idade = 18;

// if (idade >= 18) {
//     console.log("Você é maior de idade")
// } else {
//     console.log("Você é menor de idade")
// }

// Crie um algoritimo que calcule a area de uma parede
// E faça orçamento de um pitor.
// Sabemos que o pintor cobra 10 reais por metro quadrado.
// Se a area for maior que 10m2, o pintor cobrará uma taxa adicional de 20%
// Sobre o valor da área.

const altura = 4.70;
const largura = 10.70;
const area = altura * largura;
const valorPorMetro = 10;

const valorTotal = area * valorPorMetro;

if (area > 10) {
    const valorDaTaxa = valorTotal * 0.20;
    const calculoTotal = valorTotal + valorDaTaxa;
} else {
        console.log(`
        A area da parede é: ${area.toFixed(2)}
        O valor total é: ${calculoTotal.toFixed(2)}
    `)
}