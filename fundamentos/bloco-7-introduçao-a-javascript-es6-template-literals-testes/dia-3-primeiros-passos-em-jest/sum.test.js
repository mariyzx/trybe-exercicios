const sum = require('./sum.js');

describe('testa a função sum', () => {
  it('deve retornar o resultado', () => {
    expect(sum(4,5)).toBe(9);
    expect(sum(0,0)).toBe(0);
  });
  it('retorna erro se os parametros sao de tipos diferentes', () => {
    expect(() => sum(4, '5')).toThrowError();
    expect(() => sum(4, '5')).toThrowError('parameters must be numbers');
  })
})