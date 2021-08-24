const uppercase = (str, callback) => {
    setTimeout(() => {
      callback(str.toUpperCase());
    }, 500);
  };

test("Verifica se a função transforma as letras das palavras em letras maiúsculas", (done) => {
    uppercase('walmir',(str) => {
        try {
            expect(str).toBe('WALMIR');
            done();
        } catch (error) {
            done(error);
        }
    })

})