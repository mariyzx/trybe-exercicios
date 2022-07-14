var service = require('./service');

it('Testa se a função randomNumber está sendo chamada, seu retorno e qnts vezes foi chamada', () => {
  service.randomNumber = jest
  .fn()
  .mockReturnValue(10);

  expect(service.randomNumber()).toBe(10);
  expect(service.randomNumber).toHaveBeenCalled();
  expect(service.randomNumber).toHaveBeenCalledTimes(1);
});

it('Testa se a função foi chamada e se a nova implementação foi aplicada apenas uma vez', () => {
  service.randomNumber = jest.fn().mockImplementation((a, b) => a / b);
  
  expect(service.randomNumber(4, 2)).toBe(2);
  expect(service.randomNumber).toHaveBeenCalled();
  expect(service.randomNumber).toHaveBeenCalledTimes(1);
});

it('Mockando função para receber 3 parâmetros e retornar multiplicação', () => {
  service.randomNumber = jest.fn().mockImplementation((a, b, c) => a * b * c);

  expect(service.randomNumber(1, 2, 3)).toBe(6);
  expect(service.randomNumber).toHaveBeenCalled();
  expect(service.randomNumber).toHaveBeenCalledTimes(1);
});

it('Mockando função para receber 1 parâmetros e retornar seu dobro', () => {
  service.randomNumber.mockReset();

  service.randomNumber = jest.fn().mockImplementation((a) => a * 2);

  expect(service.randomNumber(2)).toBe(4);
  expect(service.randomNumber).toHaveBeenCalled();
  expect(service.randomNumber).toHaveBeenCalledTimes(1);
});

it('Mockando a função returnCaps para caixa baixa', () => {
  const returnCaps = jest.spyOn(service, 'returnCaps').mockImplementation((str) => str.toLowerCase());

  expect(returnCaps('AAA')).toBe('aaa');
});

it('Mockando a função returnFirstLetter para retornar a última letra', () => {
  const returnFirstLetter = jest.spyOn(service, 'returnFirstLetter').mockImplementation((str) => str.charAt(str.length - 1));

  expect(returnFirstLetter('teste')).toBe('e');
});

it('Mockando a função returnConcat para concatenar três strings', () => {
  const returnConcat = jest.spyOn(service, 'returnConcat').mockImplementation((str1, str2, str3) => str1 + str2 + str3);

  expect(returnConcat('t', 'r', 'y')).toBe('try');
});

it("restaurando a primeira função e verifica se ela retorna em caixa alta", () => {
  service.returnCaps.mockRestore();

  expect(service.returnCaps("lowercase")).toBe("LOWERCASE");
})

describe('testando a requisição', () => {
  service.fetchDog = jest.fn();
  afterEach(service.fetchDog.mockReset);

  it('testando caso a promise seja resolvida', async () => {
    service.fetchDog.mockResolvedValue('request sucess');

    service.fetchDog();
    expect(service.fetchDog).toHaveBeenCalled();
    await expect(service.fetchDog()).resolves.toBe('request sucess');
  });

  it('testando caso a promise seja rejeitada', async () => {
    service.fetchDog.mockResolvedValue('request failed');

    expect(service.fetchDog).toHaveBeenCalledTimes(0);
    await expect(service.fetchDog()).resolves.toMatch('request failed');
    expect(service.fetchDog).toHaveBeenCalledTimes(1);
  })
})