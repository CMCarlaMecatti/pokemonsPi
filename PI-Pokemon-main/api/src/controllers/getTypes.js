const {Type}= require('../db');
const URL= 'https://pokeapi.co/api/v2/type';
const axios= require('axios');


const getTypes = async (_req, res) => {
    try {
        let types = await Type.findAll();
        if(types.length === 0){
            const {data} = await axios(URL);
            types = data.results.map((type) => {
                return {
                    name: type.name
                }
            })
            await Type.bulkCreate(types);
        }
        return res.status(200).json(types);

        
    } catch (error) {
        return res.status(404).send(error.message);
    }
};

module.exports= {getTypes}