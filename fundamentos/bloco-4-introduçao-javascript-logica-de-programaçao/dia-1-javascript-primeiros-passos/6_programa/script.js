let peça = 'cavalo'
let lowercase_peça = peça.toLowerCase();

if (peça === 'bispo') {
    console.log('Diagonais')
} else if (peça === 'peão') {
    console.log('O peão avança a uma casa ocupada por uma peça adversária, que esteja diagonalmente à sua frente, numa coluna adjacente, capturando aquela peça.')
} else if (peça === 'torre') {
    console.log('Movimenta-se em direção reta pelas colunas ou fileiras.')
} else if (peça === 'cavalo') {
    console.log('Movimenta-se sempre em "L",ou seja,duas casas para frente e uma para a esquerda ou direita. O cavalo é a única peça que pode pular sobre as outras, tanto as suas quanto as adversárias')
} else if (peça === 'rainha') {
    console.log('É a peça mais poderosa do jogo, uma vez que seu movimento combina o da torre e o do bispo, ou seja, pode mover-se pelas colunas, fileiras e diagonal de outra cor.')
} else if (peça === 'rei') {
    console.log('Move-se para todas as direções pela vertical, horizontal ou diagonal, mas apenas uma casa por lance.')
} else {
    console.log('ERRO!')
}