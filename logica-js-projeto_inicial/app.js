alert('Boas vindas ao jogo do número secreto');
let numeroSecreto = 5;
console.log(numeroSecreto);
let chute = prompt('Escolha um número entre 1 e 10');

// se o chute for igual ao número secreto
if (numeroSecreto == chute) {
    alert('Isso ai! VocÊ descobriu o número secreto (5)');
} else {
    alert('Você errou :(')
}
