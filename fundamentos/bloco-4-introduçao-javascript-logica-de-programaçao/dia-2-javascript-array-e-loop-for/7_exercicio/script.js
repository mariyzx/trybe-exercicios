let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

let menorValor = numbers[0];

for (let i = 0; i < numbers.length; i += 1) {
    if(numbers[i] < menorValor) {
        menorValor = numbers[i]
    }
}

console.log(menorValor);

// assim como o exercício 5, nesse iniciamos já dando
// o valor do primeir elemento para o 'menorValor'
// dessa forma, ele vai ser comparado com o proximo elemento, caso
// seja menor, o valor do segundo elemento vai para a variavel 'menorValor'