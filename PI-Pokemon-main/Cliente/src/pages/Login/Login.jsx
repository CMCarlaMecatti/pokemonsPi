import LoginUser from "../../components/LoginUser/LoginUser";
import axios from "axios";
import {useDispatch, useSelector} from "react-redux";
import { useNavigate, Link } from "react-router-dom";
import { useState } from "react";
import { setAccess , setUserId } from "../../redux/actions";
import style from "./Login.module.css";
const Login = () => {
    const dispatch= useDispatch();
    const navigate = useNavigate();
    const pokeAcces= useSelector(state => state.setAcces)
    //const [pokemonAccess, setPokemonAccess] = useState(null);

    const login = async (userData) => {
        try {
            const { username, password } = userData;
            const { data } = await axios.post("http://localhost:3001/login", { username, password })
            const access = data.access;
            const user = { userId: data.userId, username: data.username, email: data.email };
            dispatch(setUserId(user));
            dispatch(setAccess(access));
            pokeAcces && navigate('/home')
        } catch (error) {
            console.log(error.message);
        }
 }
 
    return (
        <div >
            <LoginUser login={login}  />
            <div className={style.register}><p>Not an user?</p> 
            <Link to="/register">
                <button className={style.button}>Register</button>
                </Link> </div>
        </div>
    );
}

export default Login;