const uppercase = (str, callback) => {
    setTimeout(() => {
      callback(str.toUpperCase());
    }, 500);
  };

  it('Espera que a palavra retorna com letras maiúsculas' , (done) => {
    uppercase('teste', (str) => {
      try {
        expect(str).toBe('TESTE');
        done();
      } catch (error) {
        done(error);
      }
    })
  })
