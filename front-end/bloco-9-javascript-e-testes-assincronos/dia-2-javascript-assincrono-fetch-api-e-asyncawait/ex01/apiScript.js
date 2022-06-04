// apiScript.js
const fetchJoke = () => {

  fetch('https://icanhazdadjoke.com/', { headers: { 'Accept': 'application/json' } })
    .then(response => response.json())
    .then(data => 
      document.getElementById('jokeContainer').innerText = data.joke
    );
};

window.onload = () => fetchJoke();