import { Link } from "react-router-dom";
import style from "./User.module.css";
import { useState, useEffect } from "react";
import axios from "axios";
import { useSelector } from "react-redux/es/hooks/useSelector";
const Favs = () => {

    const user = useSelector((state) => state.userId);
    const [pokemons, setPokemons] = useState([]);
    const getPokemons = async () => {
        try {
            const { data } = await axios.get(`http://localhost:3001/user/${user.userId}`);
            if (!data.length) throw Error('There are no pokemons')
            setPokemons(data);
            console.log(data);
        } catch (error) {
            console.log(error.message);
        }
    }

    useEffect(() => {
        getPokemons();
    }, [])
    console.log(pokemons)

    return (
        <div className={style.containerAll}>
            <div className={style.userContainer}>
            <div className={style.userInfo}>
            <p>Username:{user.username}</p>
            <p>Email:{user.email}</p>
            <Link to={"/login"}><button className={style.button}>Logout</button></Link>
            </div>
            </div>
            <h2>My POKEMONS:</h2>
           
           <div className={style.cardContainer}>{pokemons.map((pokemon) => (
                <div className={style.container}>
                    <div className={style.pokemonCard} key={pokemon.id}>
                    <div className={style.buttonX}><button  >X</button></div>
                        <div className={style.background}>
                        <img className={style.image} src={pokemon.image} alt={pokemon.name} /></div>
                        <div className={style.content}>
                            <h2 className={style.name}>{pokemon.name}</h2>
                            <p>Life: {pokemon.life}</p>
                            <p>Attack: {pokemon.attack}</p>
                            <p>Defense: {pokemon.defense}</p></div>
                    </div>
                </div>
                
            ))}
            </div>
        </div>
    );
}

export default Favs