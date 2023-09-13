const axios = require('axios');
const URL = "https://pokeapi.co/api/v2/pokemon";
const {getPokemonDetails}= require('../pokemonDetail')

const byNameApi = async(name) => {
    const {data} = await axios(`${URL}/${name}`);
    if(!data.name) throw new Error('Name not found');
    const pokemon = getPokemonDetails(data);
    
    return pokemon
};

module.exports={byNameApi}