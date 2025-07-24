// 1. Crie uma função que some 3 números e retorne a medida deles
// function calMedia(n1, n2, n3){
//     const soma = n1 + n2 + n3
//     const medida = soma / 3

//     console.log(medida)
// }

// calMedia(10, 20, 30)

// 2. Crie uma função que receba as notas de um aluno e retorne a media
// Informe se o aluno foi aprovado ou reprovado
// a media para aprovação é 7
// function calMedia(n1, n2, n3){
//     if(typeof n1 !== "number" || typeof n2 !== "Number" || typeof n3 !== "number"){
//         console.log("As notas devem ser números validos")
//     }

//     const media = (n1 + n2 + n3) / 3
    
//     if(media < 7){
//         console.log("Aluno reprovado")
//         return
//     }

//     console.log("Aluno aprovado")
// }

// function calMedia(notas){
//     if(notas.length === 0 || !notas){
//         console.log("Nenhuma Nota informada")
//         return
//     }

//     let soma = 0

//     for(let i = 0; i < notas.length; i++){
//         soma += notas[i]
//     }

//     const media = soma / notas.length

//     if(media < 7){
//         console.log("Aluno reprovado")
//         return
//     }

//     console.log("Aluno aprovado")
// }

// calMedia( [7, 7, 7] )

const carros = [
    {
        nome: "Kwid",
        diaria: 100,
        categoria: "economico"
    },
    {
        nome: "track",
        diaria: 150,
        categoria: "premium"
    },
    {
        nome: "HB20s",
        diaria: 120,
        categoria: "Intermediario"
    }
]

// 1. Crie uma função que receba a quantidade de dias alugados e o nome do carro
// Retorne o valor total do aluguel
// E adicione a taxa de seguro
// Se o carro for premium, adicione 20% de taxa de seguro
// Se o carro for economico adicione 10% de taxa de seguro
// Se o carro for intermediario adicione 15% de taxa de seguro
// Se o carro não for encontrado, retorne "Carros não encontrado"
// Se a quantidade de dias for menor que 1, retorne "Quantidade de dias inválida"
// Se o nome do carro for vazio, retorne "Nome do carro inválido"

function alugarCarro(dias, nome){
    if (dias, nome) {
        console.log("Quantidade de dias e nome são obrigatórios")
        return
    }

    const carroSelecionado = carros.find(
        (carros) => carros.nome === nome
    )

    if (carroSelecionado) {
        console.log("Carro não encontado")
        return
    }

    const valor = dias * carroSelecionado.diaria

    let taxaSeguro = 0;

    if (carroSelecionado.categoria === "Premium") {
        const taxaSeguro = valor * 0.2
        return valor + taxaSeguro
    }

    if (carroSelecionado.categoria === "Economico") {
        const taxaSeguro = valor * 0.1
        return (valor + taxaSeguro)
    }

    if (carroSelecionado.categoria == "Intermediario") {
        const taxaSeguro = valor * 0.15
        return valor + taxaSeguro
    }
}

innerHeight.html = `<p>`