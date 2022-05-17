const myFizzBuzz = require('./myFizzBuzz.js');

describe('verifica a função myFizzBuzz', () => {
    it('verifica se retorna fizzbuzz, fizz ou buzz', () => {
        expect(myFizzBuzz(15)).toBe('fizzbuzz');
        expect(myFizzBuzz(9)).toBe('fizz');
        expect(myFizzBuzz(10)).toBe('buzz');
        expect(myFizzBuzz(2)).toBe(2);
        expect(myFizzBuzz('1')).toBe(false);
    })
});