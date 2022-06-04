const append = (param) => {
    // Essa função tem como objetivo criar dinâmicamente uma lista para adicionar as moedas
    const ul = document.querySelector('ul')

    const li = document.createElement('li');
    const divMoeda = document.createElement('div')

    divMoeda.innerHTML = param

    li.appendChild(divMoeda);
    ul.appendChild(li)
}

const showMoedas = (arr) => {
    // Essa funçao tem como objetivo formatar o modo como a moeda vai ser exibida;
    // Nome (symbol): priceUsd
    const allMoedas = arr.map((crypto) => crypto);
    const first10 = allMoedas.filter((moeda) => moeda.rank <= 10)
    first10.forEach((moeda) => {
        const preço = moeda.priceUsd
        const teste = Number(preço).toFixed(2)
        append(`${moeda.name} (${moeda.symbol}): ${teste}`)
    })
}

async function fetchCrypto() {
    try {
        const response = await fetch('https://api.coincap.io/v2/assets');
        const data = await response.json();
        const moeda = data.data;
        showMoedas(moeda);
    } catch (error) {
        console.log(error)
    }
}

window.onload = () => fetchCrypto();