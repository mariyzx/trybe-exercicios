const RIGHT_ANSWERS = ['A', 'C', 'B', 'D', 'A', 'A', 'D', 'A', 'D', 'C'];
const STUDENT_ANSWERS = ['A', 'N.A', 'B', 'D', 'A', 'C', 'N.A', 'A', 'D', 'B'];

const verificaçao = (RIGHT_ANSWERS, STUDENT_ANSWERS) => {
    if(RIGHT_ANSWERS === STUDENT_ANSWERS) {
        return 1;
    } else if (RIGHT_ANSWERS !== STUDENT_ANSWERS) {
        return -0.5;
    } else {
        return 0;
    }
}

const notasFinais = (RIGHT_ANSWERS, STUDENT_ANSWERS, verificaçao) => {
    contador = 0;

    for (let i = 0; i < RIGHT_ANSWERS.length; i += 1) {
        const comparaçao = verificaçao(RIGHT_ANSWERS[i], STUDENT_ANSWERS[i]);
        contador += comparaçao;
    }
    return `A nota final é ${contador}!`
}

console.log(notasFinais(RIGHT_ANSWERS, STUDENT_ANSWERS, verificaçao))