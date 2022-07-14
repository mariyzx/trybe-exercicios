var service = require('./service');
jest.mock("./service");

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
