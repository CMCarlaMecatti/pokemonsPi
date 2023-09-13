
const {idApiOrBd}= require('../helpers/getbyId/idApiOrBd');

const pokemonById= async(req,res)=>{
    try {
        const { id } = req.params;
        const pokemon = await idApiOrBd(id);
        return res.status(200).json(pokemon);

        
    } catch (error) {
        return res.status(404).send(error.message);
    }

}

module.exports={pokemonById}