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
