// apiScript.js   
const API_URL = 'https://icanhazdadjoke.com/';

const fetchJoke = () => {
  const myObject = {
    method: 'GET',
    headers: { 'Accept': 'application/json' }
  };

  fetch(API_URL, myObject)
  .then(response => response.json())
  .then(data => document.getElementById('jokeContainer').innerText = data.joke);
};

window.onload = () => fetchJoke();

//2
const fetchPromise = () => {
  const promise = new Promise ((resolve, reject) => {
    const myArray = [];
    
    for(let index =0; index <9 ; index += 1){
      myArray.push(Math.floor(Math.random()*50)+1)
    }
   
    const quadSum = myArray.map((number) => number * number ).reduce((acc, number) => acc + number, 0);
    console.log(quadSum);
    (quadSum < 8000)? resolve(quadSum) : reject();

  });
  const dividers = [2,3,5,10];
  
  promise
    .then( quadSum => dividers.map((number) => quadSum /number))
    .then( array => array.reduce((acc, number) => number + acc, 0))
  .catch(() => console.log("É mais de oito mil! Essa promise deve estar quebrada!"));

}

fetchPromise();