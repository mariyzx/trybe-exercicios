const fs = require('fs').promises;

async function readSimpsons() {
  try {
    const data = await fs.readFile('./simpsons.json', 'utf-8');
    const simpsons = JSON.parse(data);
    //simpsons.map((char) => console.log(`${char.id} - ${char.name}`));
    return simpsons;
  } catch(error) {
    console.error(`Erro na leitura do arquivo ${error}`);
  }
}

async function returnIdSimp(id) {
  try {
    const data = await fs.readFile('./simpsons.json', 'utf-8');
    const simpsons = JSON.parse(data);
    const foundSimpson = simpsons.find((char) => Number(char.id) === id);
    if (!foundSimpson) {
      throw new Error('id não encontrado')
    }
    return foundSimpson;
  } catch(error) {
    console.error(`Erro na leitura do arquivo ${error}`);
  }
}

async function filterSimp() {
  try {
    const data = await fs.readFile('./simpsons.json', 'utf-8');
    const simpsons = JSON.parse(data);
    const filteredSimp = simpsons.filter((char) => char.id != '10' && char.id != '6')
    await fs.writeFile('./simpsons.json', JSON.stringify(filteredSimp));
  } catch(error) {
    console.error(`Erro na escrita do arquivo ${error}`);
  }
}

module.exports = {
  filterSimp
}