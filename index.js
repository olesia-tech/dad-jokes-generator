const btnEl = document.getElementById('btn');
const jokeEl = document.getElementById('joke');



const apiKey = '9ewGBxwSM4TDfKMoVW7TCA==SW50vM8BLhBTAxls'




const options = {
  method: 'GET',
  headers: {
    "X-Api-Key": apiKey,
  },
};

const apiUrl = 'https://api.api-ninjas.com/v1/dadjokes?limit=1'



async function getJoke(){
  try{
    jokeEl.innerText = 'Updating...';
    btnEl.disabled = true;
    btnEl.innerText = 'Loading...';
    const response = await fetch(apiUrl, options);
    const data = await response.json();

    btnEl.disabled = false;
    btnEl.innerText = 'Tell me a joke'

    jokeEl.innerText = data[0].joke;
  } catch (error) {
   joke.innerText = 'Error, try again later';
   btnEl.disabled = false;
   btnEl.innerText ='Tell me a joke';
   console.log(error);
  }
}


btnEl.addEventListener('click', getJoke);