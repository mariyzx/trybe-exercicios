randomNumber = () => {
  return Math.floor(Math.random() * 100) + 1;
}

returnCaps = (string) => {
  return string.toUpperCase()
}

returnFirstLetter = (string) => {
  return string.charAt(0)
}

returnConcat = (str1, str2) => {
  return str1 + ' ' + str2;
}

module.exports = { randomNumber, returnCaps, returnFirstLetter, returnConcat };