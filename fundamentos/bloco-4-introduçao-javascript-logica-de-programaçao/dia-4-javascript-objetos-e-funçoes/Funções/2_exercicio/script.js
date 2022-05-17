function indiceMaiorValor(arrayTeste) {
    let maiorValor = 0;

    for (let i = 0; i < arrayTeste.length; i+=1) {
        if (arrayTeste[i] > maiorValor) {
            maiorValor = [i]
        } 
    }

    console.log(maiorValor)
}

indiceMaiorValor([2, 3, 6, 7, 10, 1])