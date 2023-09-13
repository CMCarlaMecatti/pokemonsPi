const {User , Pokemon, Favorites} = require('../db');

const getUserPokemons= async(req,res)=>{
     
        try {
            const {id}= req.params;
          const user = await User.findByPk(id, {
            include: [
              {
                model: Pokemon,
                through: Favorites, 
              },
            ],
          });
      
          if (!user) {
            throw new Error('Usuario no encontrado');
          }
     
          const pokemonsCreated = user.pokemons;
        
          res.status(200).json(pokemonsCreated);
        } catch (error) {
          res.status(404).send(error.message);
        }
      };  
      
     
      
module.exports = {getUserPokemons}