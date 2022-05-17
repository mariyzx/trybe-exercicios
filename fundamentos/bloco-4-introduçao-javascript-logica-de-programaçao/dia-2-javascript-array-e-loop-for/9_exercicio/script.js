let arr = []

let divisao = []

for (let i = 1; i < 26; i+= 1) {
    arr.push(i)    
}

console.log(arr);

for (let j = 0; j < arr.length; j += 1) {
    let aux = (arr[j] / 2)
    divisao.push(aux)
}

console.log(divisao)

// neste exercício utilizei o laço for do exercício anterior, criei um novo for que percorresse o array 'arr'
// e divisse cada elemento por 2 e inserisse esse novo elemento no array 'divisao'