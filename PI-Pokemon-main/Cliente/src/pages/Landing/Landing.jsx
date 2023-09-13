import { Link } from "react-router-dom";
import style from "./Landing.module.css"
const Landing = () => {
    return (
        
        <div className={style.container}>
           <Link to="/login" ><button className={style.button} >Poke User</button></Link>
           <Link to="/home" ><button className={style.button}>No User</button></Link>
        </div>
       
    );
};

export default Landing