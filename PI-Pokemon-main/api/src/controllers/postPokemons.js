/*const { Pokemon, Type } = require('../db');

const postPokemons = async (req, res) => {
  try {
    const { name, image, life, attack, defense, speed, height, weight, types } = req.body;

    if(!(name, image, life, attack, defense)){
      return res.status(400).json('Faltan datos');
    }
   
    const createdPokemon = await Pokemon.create({ name, image, life, attack, defense, speed, height, weight });

   
    if (types && Array.isArray(types)) {
      const typeInstances = await Type.findAll({ where: { id: types } });
      await createdPokemon.setTypes(typeInstances);
    }

    return res.status(200).json(createdPokemon);
  } catch (error) {
   
    return res.status(500).send(error.message);
  }
};*/
const { Pokemon, Type } = require('../db');

const postPokemons = async (req, res) => {
  try {
    const { name, image, life, attack, defense, speed, height, weight, types, createdByUser } = req.body;

    if (!(name, image, life, attack, defense)) {
      return res.status(400).json('Faltan datos');
    }

    const createdPokemon = await Pokemon.create({ name, image, life, attack, defense, speed, height, weight, createdByUser });

    if (types && Array.isArray(types)) {
      const typeInstances = await Type.findAll({ where: {id:types} });
      await createdPokemon.setTypes(typeInstances);
    }

    return res.status(200).json(createdPokemon);
  } catch (error) {
    return res.status(500).send(error.message);
  }
};

module.exports = { postPokemons };


module.exports = { postPokemons };