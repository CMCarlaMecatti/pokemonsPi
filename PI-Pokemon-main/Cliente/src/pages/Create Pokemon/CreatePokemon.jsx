import FormPokemon from "../../components/FormPokemon/FormPokemon";
import { useDispatch, useSelector } from "react-redux";
import { pokeTypes } from "../../redux/actions";
import { useEffect } from "react";
import { createPokemon, addFavorites } from "../../redux/actions";
import style from "./CreatePokemon.module.css";

const CreatePokemon = () => {
    const dispatch= useDispatch();
    const types= useSelector((state) => state.pokemonTypes);
    const userId= useSelector((state) => state.userId);
    
     
    useEffect(() => {
        dispatch(pokeTypes());
        
    }, [])

const addPokemon = (pokemon) => {
        dispatch(createPokemon(pokemon));
        const name= pokemon.name
        dispatch(addFavorites(userId, name));
        console.log(pokemon.name, userId);
    }
   
    return (
        <div >
            <FormPokemon types={types} addPokemon={addPokemon} />
        </div>
    );
};

export default CreatePokemon;