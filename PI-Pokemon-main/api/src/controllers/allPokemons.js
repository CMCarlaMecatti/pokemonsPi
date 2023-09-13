/*const {Pokemon} = require('../db');
const axios= require('axios');
const URL= "https://pokeapi.co/api/v2/pokemon"

const getAllPokemons = async (req, res)=>{
    try {
        const {data} = await axios(`${URL}`);
        //if(!data.results.name) throw Error('mensaje de error');
        const pokemons= data.results.map( (pokemon)=>{ 
            
                //id: pokemon.id,
                name: pokemon.name,
                //url: pokemon.url
                // image:pokemon.url.sprites.front_default,
                // life: pokemon.url.stats.base_stat,
                //attack:pokemon.url.stats.

            }
        )
        return res.status(200).json(pokemons)
        //const pokemons = data.map(async (pokemon)=>{


        
        
    } catch (error) {
        return res.status(404).send(error.message);
    }
}

module.exports={getAllPokemons}*/
const { Pokemon, Type } = require('../db');
const axios = require('axios');
const URL = "https://pokeapi.co/api/v2/pokemon?limit=120&offset=0";
const { getPokemonDetails } = require('../helpers/pokemonDetail')
const { pokemonByName } = require('./pokemonByName')


const allPokemons = async (req, res) => {
  try {
    const { name } = req.query;
    if (name) {
      console.log(name);
      const pokemon = await pokemonByName(name);
      return res.status(200).json(pokemon);
    }
    const dbPokemons = await Pokemon.findAll({
      include: {
        model: Type,
        attributes: ['name'],
        through: { attributes: [] }
      }
    });

    const { data } = await axios(`${URL}`);
    const apiPokemons = await Promise.all(data.results.map(async (pokemon) => {
      const { data: pokemonDetails } = await axios(pokemon.url);
      return getPokemonDetails(pokemonDetails);
    }
    ));
    const combinedPokemons = [...dbPokemons, ...apiPokemons];

    return res.status(200).json(combinedPokemons);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
}

module.exports = { allPokemons };
