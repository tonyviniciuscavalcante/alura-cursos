// Crie um contador que comece em 1 e vá até 10 usando um loop while. Mostre cada número.
let contador = 1;
while (contador <= 10) {
    console.log(contador);
    contador++;
}

// Crie um contador que começa em 10 e vá até 0 usando um loop while. Mostre cada número.
let contador1 = 10;
while (contador1 >= 0) {
    console.log(contador1);
    contador1--;
}

// Crie um programa de contagem regressiva. Peça um número e conte deste número até 0, usando um loop while no console do navegador.
let numero = prompt('Digite um número para a contagem regressiva');
while(numero >= 0) {
    alert(`CONTAGEM REFRESSIVA: ${numero}`);
    numero--;
}

// Crie um programa de contagem progressiva. Peça um número e conte de 0 até esse número, usando um loop while no console do navegador.
let numero1 = prompt('Digite um número para a contagem progressiva');
let aux = 1;
while(numero1 >= aux) {
    alert(`CONTAGEM PROGRESSIVA: ${aux}`);
    aux++;
}