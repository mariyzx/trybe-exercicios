function encode(str) {
  
    let strArray = str.split('')
    for(let i = 0; i < strArray.length; i += 1) {
      if (strArray[i] == 'a') {
        strArray[i] = 1;
      } else if (strArray[i] == 'e') {
        strArray[i] = 2;
      } else if (strArray[i] == 'i') {
        strArray[i] = 3;
      } else if (strArray[i] == 'o') {
        strArray[i] = 4;
      } else if (strArray[i] == 'u') {
        strArray[i] = 5;
      }
    }
    let strFinal = strArray.join('')
    return strFinal
  }
  
  function decode(nums) {

    let numsArray = nums.split('')
  
    for (let i = 0; i < numsArray.length; i += 1) {
      if (numsArray[i] == 1) {
        numsArray[i] = 'a';
      } else if (numsArray[i] == 2) {
        numsArray[i] = 'e';
      } else if (numsArray[i] == 3) {
        numsArray[i] = 'i';
      } else if (numsArray[i] == 4) {
        numsArray[i] = 'o';
      } else if (numsArray[i] == 5) {
        numsArray[i] = 'u';    
      }
    }
  
    let numsFinal = numsArray.join('')
  
    return numsFinal
  
  };

  module.exports = {encode, decode};