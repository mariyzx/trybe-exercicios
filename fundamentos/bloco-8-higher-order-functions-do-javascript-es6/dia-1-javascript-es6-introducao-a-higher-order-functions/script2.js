const condiçao = (numeroApostado, numeroFinal) => numeroApostado === numeroFinal;

const resultadoLoteria = (numeroApostado, callback) => {
    const x = Math.floor((Math.random() * 5) + 1 );
    
    return callback(numeroApostado, x) ? "Parabéns, vocẽ ganhou" : "Tente novamente";
};

console.log(resultadoLoteria(2, condiçao));