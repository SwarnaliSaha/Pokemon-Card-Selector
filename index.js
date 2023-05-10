// const fetch=(data)=>{
//     try {
//         return data
//     } catch (error) {
//         return error
//     }
// }
// const result=fetch(pokemons)
// console.log(result)
 
let pokemons = ["Pikachu","Eevee","Ditto","Gengar","Raichu"];

const allPokemon = document.getElementById("available-pokemon");
const selectedPokemons = document.getElementById("selected-pokemons");


const removePokemon = (event)=>{
    event.target.remove();
    const pokemonDiv = document.createElement('div');
    pokemonDiv.className = "available-pokemon";
    pokemonDiv.textContent = event.target.innerText;
    pokemonDiv.addEventListener("click",selectPokemon)
    allPokemon.appendChild(pokemonDiv);
}

const selectPokemon=(event)=>{
    event.target.remove();
    const selectedPokemonElement = document.createElement('div');
    selectedPokemonElement.className = "selected-pokemons";
    selectedPokemonElement.textContent = event.target.innerText;
    selectedPokemons.appendChild(selectedPokemonElement);

    selectedPokemonElement.addEventListener("click",removePokemon);
}

for(let i=0;i<pokemons.length;i++){
    const pokemon = pokemons[i];
    const pokemonElement = document.createElement('div');
    pokemonElement.className = 'available-pokemon';
    pokemonElement.textContent = pokemon;
    allPokemon.appendChild(pokemonElement);

    pokemonElement.addEventListener("click",selectPokemon)
}


