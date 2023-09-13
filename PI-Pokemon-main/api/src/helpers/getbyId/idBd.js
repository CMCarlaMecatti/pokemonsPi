const {Type, Pokemon} = require('../../db');

const idBd = async (id) => {
   const pokemon= await Pokemon.findOne({
        where: { id },
        include: {
            model: Type,
            attributes: ['name'],
            through: { attributes: [] }
        }
    });

if(!pokemon) throw Error('Id not found');


return pokemon;

}

module.exports= {idBd}