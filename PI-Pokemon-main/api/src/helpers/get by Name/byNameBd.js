const {Pokemon, Type} = require('../../db');


const byNameBd = async (name) => {
    const pokemon = await Pokemon.findOne({
        where: { name },
        include: {
            model: Type,
            attributes: ['name'],
            through: { attributes: [] }
        }
    })

if(pokemon){ 

    return pokemon}

};

module.exports = { byNameBd };