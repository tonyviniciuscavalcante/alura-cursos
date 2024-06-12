// Criar uma função que exibe "Olá, mundo!" no console.
function olaMundo() {
    console.log('Olá mundo do console!');
}

olaMundo();

// Criar uma função que recebe um nome como parâmetro e exibe "Olá, [nome]!" no console.
function olaNome(nome) {
    console.log(`Olá, ${nome}!`);
}

olaNome('Tony');

// Criar uma função que recebe um número como parâmetro e retorna o dobro desse número.
function dobroValor(valor) {
    valor = valor * 2;
    console.log(`Valor inserido é 5 e o dobro do valor é: ${valor}`);
}

dobroValor(5); 

// Criar uma função que recebe três números como parâmetros e retorna a média deles.
function mediaValor(num1, num2, num3) {
    media = (num1 + num2 + num3) / 3;
    console.log(`A média entre 2, 4 e 6 é: ${media}`);
}

mediaValor(2, 4, 6);

// Criar uma função que recebe dois números como parâmetros e retorna o maior deles.
function maiorValor(val1, val2) {
    if (val1 > val2) {
        console.log(`O maior valor entre os dois é: ${val1}`)
    } else {
        console.log(`O maior valor entre os dois é: ${val2}`)
    }
}

maiorValor(15,10);

// Criar uma função que recebe um número como parâmetro e retorna o resultado da multiplicação desse número por ele mesmo
let aux = 0;
function multiplicaValor(aux) {
    aux = aux * aux;
    console.log(`A multiplicação do número 8 por ele mesmo é: ${aux}`);
}

multiplicaValor(8);