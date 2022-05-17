const {encode, decode } = require('./encodeDecode.js');

describe('Testa a função encode e decode', () => {
    it('Testa se encode e decode são funções', () => {
        expect(encode).toBeDefined();
        expect(typeof encode).toBe('function');
        expect(decode).toBeDefined();
        expect(typeof decode).toBe('function')
        expect(encode('a e i o u')).toBe('1 2 3 4 5');
        expect(decode('1 2 3 4 5')).toBe('a e i o u');
        expect(encode('b a l k')).toBe('b 1 l k');
        expect(encode('teste').length).toEqual(5);
    }) 
})