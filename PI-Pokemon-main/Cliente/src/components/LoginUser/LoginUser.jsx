import { useState } from "react"
import {validationLogin} from "../../validations/Validations"
import { useNavigate } from "react-router-dom"
import { useDispatch } from "react-redux/es/hooks/useDispatch"
import { setAccess } from "../../redux/actions"
import style from "./Login.module.css"


const LoginUser = ({ login }) => {
    const dispatch = useDispatch()
    const navigate = useNavigate();
    const [errors, setErrors] = useState({});
    const [userData, setUserData] = useState(
        {
            username: "",
            password: ""
        }
    );

    const handleChange = (event) => {
        setUserData({
            ...userData,
            [event.target.name]: event.target.value
        })

        setErrors(validationLogin({
            ...userData,
            [event.target.name]: event.target.value
        }))

    };

    const handleSubmit = (event) => {
        event.preventDefault();
        login(userData)
       /* dispatch(setAcces(access));
        access && navigate('/home')*/
        
        
    }

    return (
        <div >
            <div >
                <form className={style.form} onSubmit={handleSubmit} >
                    <div className={style.container}>
                        <h1  className={style.title}>Poke User</h1>
                    <div  className={style.labelName}>
                        <label htmlFor="username">Username:</label>
                        <input type="text" name="username" value={userData.username} onChange={handleChange} />
                        {errors.username && <p className={style.error}  >{errors.username}</p>}</div>

                    <div className={style.labelName}>
                        <label htmlFor="password">Password:</label>
                        <input type="password" name="password" value={userData.password} onChange={handleChange} />
                        {errors.password && <p className={style.error}  >{errors.password}</p>}</div>

                    <button className={style.button} disabled={errors.username || errors.password}>Submitt</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default LoginUser