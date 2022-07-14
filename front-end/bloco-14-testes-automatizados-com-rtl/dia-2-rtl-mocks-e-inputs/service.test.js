var service = require('./service');

it('Testa se a função randomNumber está sendo chamada, seu retorno e qnts vezes foi chamada', () => {
  service.randomNumber = jest
  .fn()
  .mockReturnValue(10);

  expect(service.randomNumber()).toBe(10);
  expect(service.randomNumber).toHaveBeenCalled();
  expect(service.randomNumber).toHaveBeenCalledTimes(1);
});

