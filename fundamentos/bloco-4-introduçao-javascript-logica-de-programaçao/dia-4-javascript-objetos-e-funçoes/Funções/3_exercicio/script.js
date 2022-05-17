function indiceMenorValor(arrayTeste) {

    let menorValor = 0;

    for (let i = 0; i < arrayTeste.length; i += 1) {
        if (arrayTeste[i] < menorValor) {
            menorValor = [i]
        }
    }

    console.log(menorValor);

}

indiceMenorValor([2, 4, 6, 7, 10, 0, -3])