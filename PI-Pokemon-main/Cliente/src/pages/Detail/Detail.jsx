import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { pokeDetail,deleteDetail } from "../../redux/actions";
import { useDispatch, useSelector } from "react-redux";
import PokeDetail from '../../components/PokeDetail/PokeDetail'
const URL='http://localhost:3001/pokemons';

const Detail = () => {
    const dispatch = useDispatch();
    const pokemon = useSelector((state) => state.pokemonDetail);
    const { id } = useParams();

    id? useEffect(() => {
        
    dispatch(pokeDetail(id));

    return () => {
        dispatch(deleteDetail());
    }

     }, [id]):null
    

    return (
        <div>
            <PokeDetail pokemon={pokemon} />
        </div>
    )

}

export default Detail;