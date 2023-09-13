const getPokemonDetails = (data) => {
  const {name, id, sprites, stats, weight, height,types} = data
  
  return {
      id: id,
      name: name,
      image: sprites.front_default,
      life: stats[0].base_stat,
      attack: stats[1].base_stat,
      defense: stats[2].base_stat,
      speed: stats[5].base_stat,
      height: height,
      weight: weight,
      types: types.map((type) => ({ name: type.type.name }))
    };
  };
  

  
  module.exports = { getPokemonDetails };
  