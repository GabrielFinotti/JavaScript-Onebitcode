const primeiroNome = prompt("Qual o seu nome?");
const segundoNome = prompt("Qual o seu sobrenome?");
const estudo = prompt("Qual a sua formação?");
const ano = prompt("Em que ano você nasceu?");

alert(
  "Recruta cadastrado com sucesso!\n" +
    "Nome completo: " +
    primeiroNome +
    " " +
    segundoNome +
    "\n" +
    "Campo de estudo: " +
    estudo +
    "\n" +
    "Idade: " +
    (2024 - ano)
);
