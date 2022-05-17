const longestWord = frase => {
    let fraseArray = frase.split(' ');
    let maxLength = 0;
    let resultado = '';

    for (const word of fraseArray) {
        if (word.length > maxLength) {
            maxLength = word.length;
            resultado = word;
        }
    }

    return resultado;
}

console.log(longestWord("palavra e palavraMaior"));