import Card from '../Card/Card'
import { useState } from 'react';
import style from './Cards.module.css'

const Cards = ({ pokemons }) => {
    const [currentPage, setCurrentPage] = useState(1);
    const [pokemonsPerPage, setPokemonsPerPage] = useState(12);

    const indexOfLastPokemon = currentPage * pokemonsPerPage;
    const indexOfFirstPokemon = indexOfLastPokemon - pokemonsPerPage;
    const currentPokemons = pokemons.slice(indexOfFirstPokemon, indexOfLastPokemon);

    
    const handlePageChange = (page) => {
        setCurrentPage(page)
    };


    if (!Array.isArray(pokemons) || pokemons.length === 0) {
        return <div>No hay pokemons disponibles.</div>;
    }
    
    
 
    return (
        <div className={style.container}>
            <div className={style.cardContainer}>
            {currentPokemons?.map(pokemon => {
                return (<Card
                    
                    key={pokemon.id}
                    id={pokemon.id}
                    name={pokemon.name}
                    image={pokemon.image}
                    types={pokemon.types} />)
            })}
            </div>
            <div className={style.buttonContainer}>
                <button className={style.button} onClick={() => handlePageChange(currentPage - 1)} disabled={currentPage === 1}>
                    Anterior
                </button>
                <button className={style.button} onClick={() => handlePageChange(currentPage + 1)} disabled={indexOfLastPokemon >= pokemons.length}>
                    Siguiente
                </button>
            </div>
        </div>
    )
}

export default Cards