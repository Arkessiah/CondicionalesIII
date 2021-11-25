// ¡NO TOCAR ESTE ARCHIVO! MODIFICARLO HARÁ QUE LOS RESULTADOS SEAN ERRÓNEOS Y EL EJERCICIO NO ESTÉ CORRECTAMENTE RESUELTO

// Set up mocha
mocha.setup('bdd');

// Establish variables for use in all tests
const { assert, expect } = chai;

describe('Test - Operadores III', () => {
  it('Las variables culpable - sentencia existen', () => {
    expect(culpable).to.be.a('string');
    expect(sentencia).to.be.a('string');
  });


  it('culpable es igual a si', () => {
    expect(sentencia).to.be.a('string');
  });

  it('culpable es igual a no', () => {
        expect(sentencia).to.be.a('string');
  });

   it('culpable es otro', () => {
        expect(sentencia).to.be.a('string');
  });
});
