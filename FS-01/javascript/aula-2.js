//Sinais de operação/Comparação

// > maior que
// < menor que
// > maior igual
// <= menor igual
// == igual (compara apenas o valor)
// === igual (compara o valor e tipo)
// !== diferente (compara o valor e tipo)
// != difefente (compara apenas e valor)
// && e
// || ou

//operadores lógicos
// && então
// ! negação

// ex:
// if(email == nul || email == undefined || email == "" || email == 0 || email == false){
//     console.log("email não informado")
// }

// if(!temFilhos){
//     console.log("email não informado")
// }

// const nome = "Francisco"
// const corPreferida = "vermelho"
// const marcaPreferida = "adidas"

// // mostrar os produtos que são da cor preferida ou da marca preferida
// if (corPreferida !== "azul" && marcaPreferida == "adidas") {
//     console.log("Lista de produtos")
// } else {
//     console.log("Lista completa")
// }

// crie um algoritimo que calcule a area de uma e calcule a quantidade de necessaria
// sabendo o valor da tinta por litro é 15 reais
// sabendo tambem que o pintor cobra 10 reais por meio qudrado
// se a quantidade de tinta for maior que 100 reais ou a altura da parede for maior que 5 metros
// então adiciona uma taxa de 50% sobre o valor total
// const altura = 5;
// const largura = 10;
// const valorTinta = 15;
// const valorPitor = 10;
// const area = altura * largura;
// const quantidadeTinta = area * valorTinta;
// const valorTotal = quantidadeTinta + (valorPitor * area);

// if(quantidadeTinta > 100 || altura > 5){
//     const valorAdicional = valorTotal * 0.5;
//     const valorFinal = valorTotal * valorAdicional

//     console.log(`Valor total é ${valorFinal}`)
// } else {
//     console.log(`valor total é ${valorTotal}`)
// }

// tipos de dados
// [] array - lista
// {} obect - objeto

// const compras = ["arroz", "feijão", "carne", "ovos"]

// console.log(compras)
// console.log(compras [0])

// // inserserção
// compras.push("molho de tomate")

// console.log(compras)

// // remoção
// compras.pop()

// console.log(compras)

// // remoção do segundo item
// compras.splice(1, 1)

// console.log(compras)

//Obetos
const filme = {
    nome: "Interstellar",
    ano: 2014,
    diretor: "Chistopher Nolan",
    genero: "Ficção Científica",
    elenco: [
        "Matthew McConaughey",
        "Anne Hathaway",
    ],
    orcamento: {
        valor: 16500000000,
        moeda: "dólar"
    },
    países: [
        {
            nome: "Estados Unidos",
            idioma: "Inglês"
        },
        {
            nome: "Reino Unido",
            idioma: "Inglês"
        }
    ]
}

console.log(filme)

console.log(filme.nome)

console.log(filme.elenco)

console.log(filme.orcamento)

console.log(filme.países[0].nome)