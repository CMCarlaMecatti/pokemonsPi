import Searchbar from "../Searchbar/SearchBar.JSX";
import { NavLink } from "react-router-dom";
import style from "./Nav.module.css";

const Nav = () => {
    return (
        <div className={style.container}>
            <Searchbar />
            
        </div>
    );
}

export default Nav