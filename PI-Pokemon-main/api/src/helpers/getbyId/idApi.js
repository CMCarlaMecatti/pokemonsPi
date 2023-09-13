const axios = require('axios');
const URL = "https://pokeapi.co/api/v2/pokemon";
const {getPokemonDetails}= require('../pokemonDetail')

const idApi = async (id) => {
    const{data}= await axios(`${URL}/${id}`);
        if(!data.name) throw new Error('Id not found');
        const pokemon = getPokemonDetails(data);
        
    return pokemon
    
};

module.exports= {idApi}