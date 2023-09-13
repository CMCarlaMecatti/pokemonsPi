const {User, Pokemon} = require('../db');
const {idApiOrBd} = require('../helpers/getbyId/idApiOrBd');
const {idBd} = require('../helpers/getbyId/idBd');
const {idApi} = require('../helpers/getbyId/idApi');
const addFavorites = async (req, res) => {
    try {
      const {userId, name } = req.body;
      console.log(name);
      console.log(userId)
      // Primero, verifica si el usuario y el Pokémon existen en la base de datos
      const user = await User.findByPk(userId);
      const pokemon = await Pokemon.findOne({ where: { name: name } });
      
      if (!user || !pokemon) {
        return res.status(404).json({ message: 'Usuario o Pokémon no encontrado' });
      }
  
      // Luego, crea una entrada en la tabla intermedia 'favorites'
      await user.addPokemon(pokemon);
  
      return res.status(200).json({ message: 'Pokémon agregado como favorito' });
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  };

  module.exports = {
      addFavorites
  }