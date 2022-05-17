let word = 'tryber';
let arrWord = word.split(''); // 't', 'r', 'y', 'b', 'e', 'r'
let ultimaLetra = word.length - 1
let arrAux = []

for (let i = ultimaLetra; i >= 0; i-=1) {
    let aux = arrWord[i]
    arrAux.push(aux);
}


console.log(arrAux.join(''))

// primeiro utilizei o método split para separar cada letra da string como um elemento da array
// depois criei uma variável com o valor do último elemento da array
// criei um array auxiliar para receber os valores das letras que foram separadas
// dessa forma, o contrador inicia na última letra do array e vai decrescendo até o índice 0 (primeira letra)
// depois utilizei o método push para adicionar cada letra que foi pega das últimas posições nas primeiras
// depois utilizei o método join para retornar o array como uma string :)