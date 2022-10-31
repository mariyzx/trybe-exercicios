const readline = require('readline-sync');
const units = ['km³', 'hm³', 'dam³', 'm³', 'dm³', 'cm³', 'mm³'];

export function convert(value: number, base: string, unit: string): number {
  const baseUnit = units.indexOf(base);
  const finalUnit = units.indexOf(unit);
  const exponent = (finalUnit - baseUnit);
  const result = value * Math.pow(1000, exponent);

  return result;
}

function exec() {
  const value = readline.questionFloat('Digite o valor a ser convertido: \n');

  const fromBaseChoiceIndex = readline.keyInSelect(units, 'Escolha um número para a base:');

  const toUnitChoiceIndex = readline.keyInSelect(units, 'Escolha um número para a conversão');

  const fromUnitChoice = units[fromBaseChoiceIndex];
  const toUnitChoice = units[toUnitChoiceIndex];

  const result = convert(value, fromUnitChoice, toUnitChoice)

  const message = `${value}${fromUnitChoice} é igual a ${result}${toUnitChoice}`

  console.log(message);
}

exec();