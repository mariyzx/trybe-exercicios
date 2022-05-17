const custo = 10;
const venda = 15;

if (custo < 0 || venda < 0) {
    console.log('ERRO!')
} else if (custo !== 0 || venda !== 0) {
    let imposto = custo * 0.2;
    let custoTotal = imposto + custo;
    let lucro = venda - custoTotal;
    let lucroFinal = lucro * 1000;
    console.log(lucroFinal);
} 