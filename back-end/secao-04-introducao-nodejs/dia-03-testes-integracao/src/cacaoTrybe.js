const fs = require('fs').promises;
const { join } = require('path');

const path = '/files/cacaoTrybeFile.json';

const readChocolates = async () => {
  try {
    const contentFile = await fs.readFile(join(__dirname, path), 'utf-8');
    return JSON.parse(contentFile);
  } catch (error) {
    console.error(`Erro na leitura do arquivo ${error}`);
  }
};

const getAllChocolates = async () => {
  try {
    const cacao = await readChocolates();
    return cacao.chocolates;
  } catch (error) {
    return null;
  }
};

module.exports = { getAllChocolates };