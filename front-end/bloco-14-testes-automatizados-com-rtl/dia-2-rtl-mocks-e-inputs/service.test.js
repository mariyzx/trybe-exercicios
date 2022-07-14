var randomNumber = require('./service');

it('Testa se a função randomNumber está sendo chamada', () => {
  randomNumber = jest
  .fn()
  .mockReturnValue(true);


  randomNumber();
  expect(randomNumber).toHaveBeenCalled();
  expect(randomNumber).toHaveBeenCalledTimes(1);
});