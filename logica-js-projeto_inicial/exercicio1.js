/*Mostre um alerta com a mensagem "Boas vindas ao nosso site!".*/
alert('Boas vindas ao nosso site!');

/*Declare uma variável chamada nome e atribua a ela o valor "Lua".*/
let nome = 'Lua';
console.log(nome);

/*Crie uma variável chamada idade e atribua a ela o valor 25.*/
let idade = 25;
console.log(idade);

/*Defina uma variável numeroDeVendas e atribua a ela o valor 50.*/
let numeroDeVendas = 50;
console.log(numeroDeVendas);

/*Defina uma variável saldoDisponivel e atribua a ela o valor 1000.*/
let saldoDisponivel = 1000;
console.log(saldoDisponivel);

/*Exiba um alerta com o texto "Erro! Preencha todos os campos"*/
alert('Erro! Preencha todos os campos');

/*Declare uma variável chamada mensagemDeErro e atribua a ela o valor "Erro! Preencha todos os campos" 
Agora exiba um alerta com o valor da variável mensagemDeErro.*/
let mensagemDeErro = 'Erro! Preencha todos os campos';
alert(mensagemDeErro);

/*Use um prompt para perguntar o nome do usuário e armazená-lo na variável nome.*/
let nome1 = prompt('Qual o nome do usuário?');
console.log(nome1);

/*Peça ao usuário para digitar sua idade usando um prompt e armazene-a na variável idade.*/
let idade1 = prompt('Digite sua idade');
console.log(idade1);

/*Agora, caso a idade seja maior ou igual que 18, exiba um alerta com a mensagem "Pode tirar a habilitação!".*/
if (idade1 >= 18) {
    alert('Pode tirar a habilitação!');
}