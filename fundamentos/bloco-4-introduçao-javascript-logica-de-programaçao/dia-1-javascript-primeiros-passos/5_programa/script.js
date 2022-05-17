let primeiroAngulo = 90;
let segundoAngulo = 30;
let terceiroAngulo = 60;

let somaDosAngulos = primeiroAngulo + segundoAngulo + terceiroAngulo;

if (primeiroAngulo === 0 || segundoAngulo === 0 || terceiroAngulo === 0) {
    console.log('Ângulo inválido!')
} else if (somaDosAngulos === 180) {
    console.log(true);
} else if (somaDosAngulos !== 180) {
    console.log(false)
}