import { useState } from "react"
import  {validationUserPoke}  from '../../validations/Validations'
import { useNavigate } from "react-router-dom"
import style from "./FormUser.module.css"

const FormUser = ({ postUser }) => {
     const [userData, setUserData] = useState(
        {
            username: "",
            email: "",
            password: ""
        }
     );

    
    const navigate = useNavigate();
     const handleChange = (event) => {
        setUserData({
            ...userData,
            [event.target.name]: event.target.value
          })
    
          setErrors(validationUserPoke({ 
            ...userData,
            [event.target.name]: event.target.value
        }))
     };
     const [errors, setErrors] = useState({});

     const handleSubmit = (event) => {
         event.preventDefault();
         postUser(userData);
         navigate("/login");
         setUserData({
            username: "",
            email: "",
            password: ""
         });
         alert("User created successfully")

     }
    
    
    return (
        <div >
            <div >
                <form className={style.form} onSubmit={handleSubmit} >
                   <div className={style.container}>
                    <h1 className={style.title}>Register</h1>
                    <div >
                        <label htmlFor="username">Username:</label>
                        <input type="text" name="username" value={userData.username} onChange={handleChange} />
                        {errors.username && <p className={style.error}>{errors.username}</p> }</div>

                    <div >
                        <div className={style.labelEmail} ><label htmlFor="email">Email:</label></div>
                        <input className={style.email} type="email" name="email" value={userData.email} onChange={handleChange} />
                        {errors.email && <p className={style.error}>{errors.email}</p> }</div>


                    <div>
                        <label htmlFor="password">Password:</label>
                        <input type="password" name="password" value={userData.password} onChange={handleChange} />
                        {errors.password && <p className={style.error}>{errors.password}</p> }</div>

                   <button className={style.button} disabled={!userData.username ||!userData.email ||!userData.password || 
                    errors.email|| errors.password || errors.username} >Submit</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default FormUser

