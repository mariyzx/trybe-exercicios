let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

let maiorNum = numbers[0];

for (let i = 0; i < numbers.length; i += 1) {
    if (numbers[i] > maiorNum) {
        maiorNum = numbers[i]
    }
}

console.log(maiorNum)

// lutei pra raciocinar:
// basicamente, o valor da primeira posição inicia como maior numero
// depois ele é comparado com o valor da segunda posição, caso o valor 
// da segunda posição seja maior que o primeiro, então o segundo irá possuir
// o valor de 'maior número', caso nao seja, o valor de 'maior numero'
// continua sendo o anterior.