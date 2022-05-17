function techList(tec, name) {


    let arrFinal = [];
  
    if (tec.length === 0) {
      return 'Vazio!';
    } else {
      tec.sort();
    }
  
    for (let i = 0; i < tec.length; i += 1) {
      const obj = {
          tech: tec[i], 
          name: name
      }
  
      arrFinal.push(obj);
    }
    return arrFinal;
  }
  