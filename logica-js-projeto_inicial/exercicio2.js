// Pergunte ao usuário qual é o dia da semana. Se a resposta for "Sábado" ou "Domingo", mostre "Bom fim de semana!". Caso contrário, mostre "Boa semana!".
let diaSemana = prompt('Qual o dia da semana?');
if (diaSemana == 'Sábado' || diaSemana == 'Domingo') {
    alert('Bom dim de semana!');
} else {
    alert('Boa semana!')
}

// Verifique se um número digitado pelo usuário é positivo ou negativo. Mostre um alerta informando.
let numero = prompt('Digite um número qualquer');
if (numero >= 0){
    alert('O numero digitado é positivo')
} else {
    alert('O número digitado é negativo')
}

// Crie um sistema de pontuação para um jogo. Se a pontuação for maior ou igual a 100, mostre "Parabéns, você venceu!". 
// Caso contrário, mostre "Tente novamente para ganhar.".


// Crie uma mensagem que informa o usuário sobre o saldo da conta, usando uma template string para incluir o valor do saldo.
let nome = prompt('Digite seu nome');
let saldo = 1000;
alert(`Olá ${nome} seu saldo em conta é ${saldo}`);

// Peça ao usuário para inserir seu nome usando prompt. Em seguida, mostre um alerta de boas-vindas usando esse nome.
let nome1 = prompt('Digite seu nome');
alert('Olá ' + nome1 + ', seja muito bem vindo!');