let info = {
    personagem: 'Margarida',
    origem: 'Pato Donald',
    nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
    recorrente: 'Sim'
  }

  let info2 = {
      personagem: 'Tio Patinhas',
      origem: 'Christmas on Bear Mountain, Dells Four Color Comics #178',
      nota: 'O último MacPatinhas',
      recorrente: 'Sim'
  }

for (let prop in info) {
    if (prop === 'recorrente' && info[prop] && info2[prop]) {
        console.log('Ambos concorrentes')
    } else {
        console.log(info[prop] + ' e ' + info2[prop])
    }

}