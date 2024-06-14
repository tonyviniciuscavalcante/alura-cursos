function comprar() {
    let tipo = document.getElementById('tipo-ingresso');
    let qtdInput = document.getElementById('qtd');
    let qtd = parseInt(qtdInput.value);

    // Verificar se a quantidade é um número positivo
    if (isNaN(qtd) || qtd <= 0) {
        alert('Por favor, insira uma quantidade válida.');
        return;
    }

    if (tipo.value == 'pista') {
        comprarPista(qtd);
    } else if (tipo.value == 'superior') {
        comprarSuperior(qtd);
    } else {
        comprarInferior(qtd);
    }
}

function comprarPista(qtd) {
    let qtdPista = parseInt(document.getElementById('qtd-pista').textContent);
    if (qtd > qtdPista) {
        alert('Quantidade indisponível para tipo pista');
    } else {
        qtdPista = qtdPista - qtd;
        document.getElementById('qtd-pista').textContent = qtdPista;
        alert('Compra realizada com sucesso!');
    }
}

function comprarSuperior(qtd) {
    let qtdSuperior = parseInt(document.getElementById('qtd-superior').textContent);
    if (qtd > qtdSuperior) {
        alert('Quantidade indisponível para tipo superior');
    } else {
        qtdSuperior = qtdSuperior - qtd;
        document.getElementById('qtd-superior').textContent = qtdSuperior;
        alert('Compra realizada com sucesso!');
    }
}

function comprarInferior(qtd) {
    let qtdInferior = parseInt(document.getElementById('qtd-inferior').textContent);
    if (qtd > qtdInferior) {
        alert('Quantidade indisponível para tipo inferior');
    } else {
        qtdInferior = qtdInferior - qtd;
        document.getElementById('qtd-inferior').textContent = qtdInferior;
        alert('Compra realizada com sucesso!');
    }
}

// Crie uma função que aceite uma string como parâmetro, utilize a função parseInt para converter essa string em um número inteiro e retorne o resultado.
function converterParaInteiro(valorString) {
    return parseInt(valorString);
}

// Exemplo de uso
let valorString = "42";
let valorInteiro = converterParaInteiro(valorString);
console.log(valorInteiro);  // Saída esperada: 42

// Escreva um programa de calculadora simples com funções separadas para adição, subtração, multiplicação e divisão. 
// Utilize um bloco condicional para determinar qual função executar com base em uma variável que representa a operação desejada.
function adicao(a, b) {
    return a + b;
}

function subtracao(a, b) {
    return a - b;
}

function multiplicacao(a, b) {
    return a * b;
}

function divisao(a, b) {
    if (b !== 0) {
        return a / b;
    } else {
        return "Erro: divisão por zero.";
    }
}

function calculadora(operacao, a, b) {
    switch (operacao) {
        case 'soma':
            return adicao(a, b);
        case 'subtracao':
            return subtracao(a, b);
        case 'multiplicacao':
            return multiplicacao(a, b);
        case 'divisao':
            return divisao(a, b);
        default:
            return "Operação inválida.";
    }
}

// Exemplo de uso
let resultado = calculadora('soma', 5, 3);
console.log(resultado);  // Saída esperada: 8

// Implemente uma função que aceite um número como parâmetro e utilize um bloco condicional para determinar se o número é par ou ímpar.
function verificarParOuImpar(numero) {
    if (numero % 2 === 0) {
        return "Par";
    } else {
        return "Ímpar";
    }
}

// Exemplo de uso
let numero = 7;
let resultadoParOuImpar = verificarParOuImpar(numero);
console.log(resultadoParOuImpar);  // Saída esperada: Ímpar

// Crie uma função que converta a temperatura de Celsius para Fahrenheit e vice-versa. 
// Utilize uma variável para indicar a escala desejada e um bloco condicional para determinar qual conversão realizar
function converterTemperatura(valor, escala) {
    if (escala.toLowerCase() === 'celsius') {
        return (valor * 9/5) + 32;  // Celsius para Fahrenheit
    } else if (escala.toLowerCase() === 'fahrenheit') {
        return (valor - 32) * 5/9;  // Fahrenheit para Celsius
    } else {
        return "Escala inválida";
    }
}

// Exemplo de uso
let temperaturaCelsius = 25;
let temperaturaFahrenheit = converterTemperatura(temperaturaCelsius, 'celsius');
console.log(temperaturaFahrenheit);  // Saída esperada: 77
