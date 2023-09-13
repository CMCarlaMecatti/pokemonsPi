import Cards from "../../components/Cards/Cards";
import style from "./Home.module.css"
import { useDispatch, useSelector } from "react-redux";
import { addPokemons, pokeTypes, orderPokes, filterTypes, pokeStorage } from "../../redux/actions";
import { useEffect, useState } from "react";



const Home = () => {
    const dispatch = useDispatch();
    const pokemons = useSelector((state) => state.pokemonsFiltered);
    const types = useSelector((state) => state.pokemonTypes);
    const storage= useSelector((state) => state.pokemonStorage);
    const filterStorage= useSelector((state) => state.filterByStorage);
    const userId= useSelector((state) => state.userId);
    const orders = ['a-z', 'z-a', 'ATTACK_ASC', 'ATTACK_DESC']

    const [storageFilter, setStorageFilter] = useState("all");
    const handleOrder = (event) => {
     
        const order= event.target.value
        console.log(order);
        dispatch(orderPokes(order));
        

    }
    console.log(userId)
    const handleTypes = (event) => {
       
        const type = event.target.value;
        
        dispatch(filterTypes(type));
        dispatch(pokeStorage(storageFilter));
       
        
    }

    const handleStorage = (event) => {
        setStorageFilter(event.target.value);
        console.log(event.target.value);

    }

    useEffect(() => {
        dispatch(pokeStorage(storageFilter));
    }, [storageFilter])

    
    useEffect(() => {
       dispatch(pokeTypes());
        dispatch(addPokemons());
        
    }, [dispatch]);

    console.log(storage)
    
    return (
        <div className={style.container} >
            <div className={style.filtersContainer}>
            <div className={style.order}> 
                <label className={style.text} htmlFor="order">Order:</label>
                <select name="order" id="order"  onChange={handleOrder}>
                <option value="default" >Select Order</option>
                {orders.map((order, i) =>
                            (<option key={i} value={order}>{order}</option>)
                        )
                    }
                </select>
            </div>
            <div className={style.types}>
            <label className={style.text} htmlFor="types">Types:</label>
                    <select id="types" name="types" onChange={handleTypes} > 
                    <option  value="default" disabled>Select types</option>
                    <option  value="all" >all</option>
                        {types.map((type) => (
                            <option key={type.id} value={type.name}>
                                {type.name}
                            </option>
                        ))}
                    </select>

            </div>
            <div className={style.storage} >
                    <h3 className={style.text}>STORAGE:</h3></div>
                   <div className={style.radioContainer}>
                    <div className={style.radio}>
                        <input type="radio" value="all" checked={filterStorage==="all"}  name="storage" onChange={handleStorage} />ALL
                    </div>
                    <div className={style.radio} >
                        <input type="radio" value="api" checked={filterStorage==="api"} name="storage" onChange={handleStorage} />POKE API
                    </div>
                    <div className={style.radio} >
                        <input type="radio" value="bd" checked={filterStorage==="bd"} name="storage" onChange={handleStorage}  />DATABASE
                    </div>
                    </div>
                </div>
            
            <Cards pokemons={pokemons} />
        </div>
    );
};



export default Home;