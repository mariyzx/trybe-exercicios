// Verifique se a importação do arquivo correto está sendo feita.
const { getPokemonDetails } = require("./script6.js");

describe("A função getPokemonDetails", () => {
  it("retorna erro quando procuramos um pokemon que não existe no banco de dados", () => {
   const erroEsperado = new Error('Não temos esse pokémon para você :(');

   const callback = (erro, resultado) => {
     expect(erro).toEqual(erroEsperado);
     done();
   }

   getPokemonDetails((pokemon) => pokemon.name === 'Pikachu', callback);
  });

  it("retorna um pokemon que existe no banco de dados", () => {
    const retornoEsperado = `Olá, seu pokémon é o Charmander, o tipo dele é Fire e a habilidade principal dele é Ember`;
    
    const callback = (erro, resultado) => {
      expect(resultado).toBe(retornoEsperado);
      done();
    }

    getPokemonDetails((pokemon) => pokemon.name === 'Charmander', callback);
  });
});