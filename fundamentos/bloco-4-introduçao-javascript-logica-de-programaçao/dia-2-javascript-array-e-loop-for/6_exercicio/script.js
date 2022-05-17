let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

let impares = 0

for (let i=0; i < numbers.length; i += 1) {
    if(numbers[i]%2 !== 0) {
        impares+=1
    }
}

if (impares === 0) {
    console.log('Nenhum valor ímpar encontrado')
} else {
    console.log(impares)
}

//o for passa por cada indice do array, se o primeiro elemento for impar
//(divisao por 2 diferente de zero), ele soma +1 ao valor de impares,
//depois do for, temos um if para imprimir a msg caso nao tenha impares