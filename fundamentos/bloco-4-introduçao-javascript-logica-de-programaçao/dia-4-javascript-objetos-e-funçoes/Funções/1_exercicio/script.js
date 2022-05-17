function verificaPalindrome(word) {


let wordArray = word.split('') // a r a r a 
let wordArrayRev = wordArray.reverse() // a r a r a ao contrario
let word2 = wordArrayRev.join('')

if (word2 === word) {
        console.log(true)
    } else {
        console.log(false)
    }
}

verificaPalindrome('desenvolvimento')
