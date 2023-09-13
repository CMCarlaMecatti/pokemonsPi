const {Pokemon}= require('../db')

const deletePokemon =async(req,res)=>{
    try {
        const {id}= req.params;
        const pokemon = await Pokemon.findByPk(id);
        if(!pokemon) throw Error('Pokemon no found');
        await pokemon.destroy();
        res.status(200).json(pokemon);
    } catch (error) {
        res.status(404).send(error.message);
    }

}

module.exports={deletePokemon}