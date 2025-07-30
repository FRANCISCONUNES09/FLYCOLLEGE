// Capturar os elementos do DOM
const botao = document.getElementById("botao");
const peso = document.getElementById("peso");
const altura = document.getElementById("altura");
const resultado = document.getElementById("resultado");
const imc = document.getElementById("imc");
const descricao = document.getElementById("descricao")

//criar função para calcular o IMC e exibir o resultado 
function calcularIMC() {
    const pesoIMC = Number(peso.value);
    const alturaIMC = Number(altura.value);

    const imcResultado = pesoIMC / (alturaIMC * alturaIMC)

    resultado.classList.remove('hidden');
    imc.textContent = imcResultado.toFixed(2);

    if (imcResultado < 18.5) {
        descricao.textContent = "Você está abaixo peso"
        return;
    }
    if(imcResultado >= 18.6 && imcResultado < 24.9){
        descricao.textContent = "Você está com o peso normal"
        return
     } 
     
     if(imcResultado >= 25 && imcResultado < 29.9){
         descricao.textContent = "Você está sobrepeso"
         return
     } 
     
     if(imcResultado >= 30 && imcResultado < 34.9){
         descricao.textContent = "Você está Obesidade de grau I"
         return
     } 
     
     if(imcResultado >= 35 && imcResultado < 39.9){
          descricao.textContent = "Você está obesidade de grau II"
          return
     } 
     
     if(imcResultado >= 40){
         descricao.textContent = "Você está obesidade de grau III"
         return
     }
}

//adicionar o evento de clique no botão
botao.addEventListener('click', calcularIMC);