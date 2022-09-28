const readline = require('readline-sync');

const weight = readline.questionFloat('What’ your weight? ');
const height = readline.questionFloat('What’ your height? (cm) ');

const height2 = height / 100;

const bmi = (weight / (height2 * height2)).toFixed(2);
let a;

if (bmi < 18.5) {
  a = 'Abaixo do peso (magreza)';
}
if (18.5 < bmi && bmi < 24.9) {
  a = 'Peso normal';
}
if (25.0 < bmi && bmi < 29.0) {
  a = 'Acima do peso (sobrepeso)';
}
if (30 < bmi && bmi < 34.9) {
  a = 'Obesidade grau I';
}
if (35 < bmi && bmi < 39.9) {
  a = 'Obesidade grau II';
}
if (40 < bmi) {
  a = 'Obesidade graus III e IV';
}

console.log(a);
console.log(bmi)