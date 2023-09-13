const { byNameApi } = require('../helpers/get by Name/byNameApi');
const { byNameBd } = require('../helpers/get by Name/byNameBd');


const pokemonByName = async (name) => {
    const pokemonName = name.toLowerCase();


    let pokemon = await byNameBd(pokemonName);


    if (!pokemon) {
        pokemon = await byNameApi(pokemonName);
    }


    if (!pokemon) {
        throw Error('Name not found');
    }

    return pokemon;
}


module.exports = { pokemonByName }