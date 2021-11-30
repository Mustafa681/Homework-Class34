'use strict';
/*------------------------------------------------------------------------------
Full description at: https://github.com/HackYourFuture/Homework/blob/main/3-UsingAPIs/Week2/README.md#exercise-2-gotta-catch-em-all

Complete the four functions provided in the starter `index.js` file:

`fetchData`: In the `fetchData` function, make use of `fetch` and its Promise 
  syntax in order to get the data from the public API. Errors (HTTP or network 
  errors) should be logged to the console.

`fetchAndPopulatePokemons`: Use `fetchData()` to load the pokemon data from the 
  public API and populate the `<select>` element in the DOM.
  
`fetchImage`: Use `fetchData()` to fetch the selected image and update the 
  `<img>` element in the DOM.

`main`: The `main` function orchestrates the other functions. The `main` 
  function should be executed when the window has finished loading.

Use async/await and try/catch to handle promises.

Try and avoid using global variables. As much as possible, try and use function 
parameters and return values to pass data back and forth.
------------------------------------------------------------------------------*/
async function fetchData(url) {
  try {
    const response = await fetch(url);
    const jsonResponse = await response.json();
    return jsonResponse.results;
  } catch (error) {
    console.log(error.message);
  }
}

async function fetchAndPopulatePokemons(promise) {
  document.body.style.display = 'flex';
  document.body.style.alignItems = 'center';
  document.body.style.flexDirection = 'column';

  const pokemonList = document.createElement('select');
  pokemonList.style.fontSize = '1.5rem';

  const options = document.createElement('option');
  options.textContent = 'Select Pokemon';
  pokemonList.prepend(options);
  document.body.appendChild(pokemonList);

  const getPokemon = document.createElement('button');
  getPokemon.textContent = 'Get Pokemon';
  getPokemon.style.margin = '2rem 0';
  getPokemon.style.fontSize = '1.5rem';
  document.body.prepend(getPokemon);
  getPokemon.addEventListener('click', () => {
    const pokemons = promise;
    pokemons.forEach(async (pokemon) => {
      const optionEl = document.createElement('option');
      optionEl.textContent = pokemon.name;

      const img = await fetchImage(pokemon);
      optionEl.value = img.id;
      pokemonList.appendChild(optionEl);
    });
  });
  const pokemonImg = document.createElement('img');
  pokemonImg.style.width = '200px';
  pokemonImg.src = '';
  document.body.appendChild(pokemonImg);
  pokemonList.addEventListener('change', (e) => {
    pokemonImg.src = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${e.target.value}.png`;
  });
  return promise;
}

async function fetchImage(obj) {
  // TODO complete this function
  const url = obj.url;
  const imgObj = await fetch(url);
  const imgSRC = await imgObj.json();
  return imgSRC;
}

async function main() {
  // TODO complete this function
  try {
    const promise = await fetchData(
      `https://pokeapi.co/api/v2/pokemon/?offset=0&limit=151`
    );
    await fetchAndPopulatePokemons(promise);
  } catch (error) {
    console.log(error.message);
  }
}
main();
