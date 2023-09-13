const {idApi}= require('./idApi');
const{idBd}= require('./idBd');
const { validate } = require('uuid');

const idApiOrBd = async (id) => {
    let pokemon = {};
    if (Number.isInteger(+id)) {
        pokemon = await idApi(id);
    } else if (validate(id)) {
        pokemon = await idBd(id);
    }/* else {
        throw new Error('Error ID');
    }*/
    return pokemon;
};

module.exports = { idApiOrBd };   