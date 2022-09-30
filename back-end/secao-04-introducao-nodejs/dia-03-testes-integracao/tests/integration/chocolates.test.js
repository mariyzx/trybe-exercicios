const chai = require('chai');
const chaiHttp = require('chai-http');
const app = require('../../src/app');

chai.use(chaiHttp);

const { expect } = chai;

describe('Usando o método GET em /chocolates/total', function () {
  it('Retorna o total de chocolates', async function () {
    const response = await chai.request(app)
      .get('/chocolates/total');

    expect(response.status).to.be.equal(200); // Caso para o código retornado
    expect(response.body).to.deep.equal({ totalChocolates: 4 }); // Caso para o retorno
  });
});