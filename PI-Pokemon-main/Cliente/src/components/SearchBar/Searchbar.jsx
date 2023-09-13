import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { pokeName } from "../../redux/actions";
import { useNavigate,NavLink } from "react-router-dom";
import { useSelector } from "react-redux/es/hooks/useSelector";
import style from "./Searchbar.module.css"

const Searchbar = () => {
     
    const access = useSelector(state => state.setAcces)
    const [name, setName] = useState('');
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const handleChange = (event) => {
        console.log(event.target);
        setName(event.target.value);
    }

    const handleClick = () => {
        dispatch(pokeName(name));
        navigate(`/detail/${name}`);
        setName('');
    }


    return (
        <div className={style.container}>
            <NavLink to={'/home'}><button className={style.button}>Home</button></NavLink>
            <input type="search" onChange={handleChange} value={name}/>
            <button  className={style.button} onClick={handleClick}>Buscar</button>
            <NavLink to={'/create'}><button className={style.button}>Crear Pokemon</button></NavLink>
            {access && <NavLink to={'/user'}><button className={style.button}>User</button></NavLink>}
            
        </div>
    );
}

export default Searchbar