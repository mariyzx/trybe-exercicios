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

fetchDog = () => {
  return fetch("https://dog.ceo/api/breeds/image/random").then(response =>
    response
      .json()
      .then(json =>
        response.ok ? Promise.resolve(json) : Promise.reject(json)
      )
  );
}

module.exports = { randomNumber, returnCaps, returnFirstLetter, returnConcat, fetchDog };