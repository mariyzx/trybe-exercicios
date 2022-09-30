const chai = require('chai');
const chaiHttp = require('chai-http');
const app = require('../../src/app');

chai.use(chaiHttp);

const { expect } = chai;

describe('Testando a API Cacao Trybe', function () {
  describe('Usando o método GET em /chocolates/total', function () {
    it('Retorna o total de chocolates', async function () {
      const response = await chai.request(app)
        .get('/chocolates/total');
  
      expect(response.status).to.be.equal(200); // Caso para o código retornado
      expect(response.body).to.deep.equal({ totalChocolates: 4 }); // Caso para o retorno
    });
  });
  
  describe('Usando o método GET em /chocolates/search', function () {
    it('Retorna o chocolate procurado', async function () {
      const response = await chai.request(app)
        .get('/chocolates/search?name=Mo');

      expect(response.status).to.be.equal(200);
      expect(response.body).to.deep.equal([
        {
          id: 3,
          name: 'Mon Chéri',
          brandId: 2,
        },
        {
          id: 4,
          name: 'Mounds',
          brandId: 3,
        },
      ]);
    });

    it('Não retorna o chocolate procurado caso nao encontre o termo', async function () {
      const response = await chai.request(app)
        .get('/chocolates/search?name=ZZZ');

      expect(response.status).to.be.equal(404);
      expect(response.body).to.deep.equal([]);
    });
  });
});