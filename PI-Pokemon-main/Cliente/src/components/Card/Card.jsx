import { Link, NavLink } from "react-router-dom";
import { useState } from "react";
import { addFavorites } from "../../redux/actions";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import style from "./Card.module.css"

const Card = ({ id, name, image, types }) => {
    //const [isFav, setIsFav] = useState(false);
    //const dispatch = useDispatch();
    //const userId = useSelector((state) => state.userId);


    /* const handleFavorite = () => {
         if (isFav) {
             setIsFav(false);
             //removeFav(id);
         }
         if (!isFav) {
             setIsFav(true);
             dispatch(addFavorites(id, userId));
             console.log(id, userId);
            
         }
     }*/



    return (


        <div className={style.container}>
        <div className={style.pokemonCard}>

            <div className={style.background}><Link to={`/detail/${id}`}><img className={style.image} src={image} alt={name} /></Link></div>
            <div className={style.content}>
            <h2 className={style.name}>{name}</h2>
            
            
            {types.map((type, index) => (
                    <span className={style.type} key={index}>{type.name}</span>
                ))}
                


            </div>
        </div >
        </div>

    )
}

export default Card