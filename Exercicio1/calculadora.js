const num1 = prompt("Insira um número");
const num2 = prompt("Insira um número");

const x = parseFloat(num1);
const y = parseFloat(num2);

const soma = x + y;
const subtracao = x - y;
const multiplicacao = x * y;
const divisao = x / y;

alert(
  `Soma: ${soma}\n Subtração: ${subtracao}\n Multiplicação: ${multiplicacao}\n Divisão: ${divisao}`
);
