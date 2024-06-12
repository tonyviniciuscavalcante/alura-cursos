// Crie uma função que calcule o índice de massa corporal (IMC) de uma pessoa, a partir de sua altura, em metros, e peso, em quilogramas, 
// que serão recebidos como parâmetro.
function calculaMassaCorporal (altura, peso) {
    let massaCorporal = peso / (altura * altura);
    console.log(`O IMC é: ${massaCorporal}`);
}

calculaMassaCorporal(1.68, 110);

// Crie uma função que calcule o valor do fatorial de um número passado como parâmetro.
function fatorialValor(num) {
    if (num === 0 || num === 1)
      console.log(num);
    for (var i = num - 1; i >= 1; i--) {
      num *= i;
    }
    console.log(num);
  }

fatorialValor(5);

// Crie uma função que converte um valor em dólar, passado como parâmetro, e retorna o valor equivalente em reais. Para isso, considere a cotação do dólar igual a R$4,80.
function converterDolarReal(dolares) {
    let reais = dolares * 4.8;
    console.log(`O valor de 5 dólares convertido em reais é ${reais}`);
}

converterDolarReal(6);

// Crie uma função que mostre na tela a área e o perímetro de uma sala retangular, utilizando altura e largura que serão dadas como parâmetro.


// Crie uma função que mostre na tela a área e o perímetro de uma sala circular, utilizando seu raio que será fornecido como parâmetro. Considere Pi = 3,14.


// Crie uma função que mostre na tela a tabuada de um número dado como parâmetro.
