import { useState } from "react";
import {validationPoke} from "../../validations/Validations";
import style from "./FormPokemon.module.css";
import { useNavigate } from "react-router-dom";

const FormPokemon = ({ types, addPokemon }) => {
    
   const [createdPoke, setCreatedPoke] = useState({
       name: '',
       image: '',
       life: '',
       attack: '',
       defense: '',
       speed: '',
       height: '',
       weight: '',
       types: [],
       createdByUser: true
   })

   const [errors, setError] = useState({})
    
const navigate= useNavigate()

   const handleChange = (event) => {
    if (event.target.name !== 'types')   { 
        setCreatedPoke({
           ...createdPoke,
           [event.target.name]: event.target.value
       })
      ;}
       else {
        setCreatedPoke({ ...createdPoke, types: [...createdPoke.types, event.target.value] });
       } 

       setError(validationPoke({ 
        ...createdPoke,
        [event.target.name]: event.target.value
    })) 
   }

   const handleSubmit = (event) => {
       event.preventDefault();
        addPokemon(createdPoke);
        console.log(createdPoke)
        setCreatedPoke(
            {
                name: '',
                image: '',
                hp: '',
                attack: '',
                defense: '',
                speed: '',
                height: '',
                weight: '',
                types: []
            }
        )

        alert("Pokemon created successfully")
        navigate('/home')

   }

   const deleteType = (typeId) => {
    
    setCreatedPoke({
      ...createdPoke,
      types: createdPoke.types.filter((type) => type !== typeId)
    });
  };
   
   const disabled= errors.name || errors.image || errors.life || errors.attack || errors.defense || !createdPoke.name
   
    return (
        <div>
             
             
            <form className={style.form}  onSubmit={handleSubmit} >
            
                <div className={style.container}>
                <h1>Create Pokemon</h1>
                <div className={style.labelName} >
                    <label  htmlFor="name">Name:</label>
                    <input type="text" name="name" onChange={handleChange}/>
                    {errors.name && <p className={style.error} >{errors.name}</p> }
                </div>
                <div>
                    <label htmlFor="image">Image:</label>
                    <input type="text" name="image" onChange={handleChange}/>
                    {errors.image && <p className={style.error}>{errors.image}</p> }
                </div>
                <div>
                    <label htmlFor="life">Life:</label>
                    <input type="number" name="life"  onChange={handleChange} />
                    {errors.life && <p className={style.error}>{errors.life}</p> }
                </div>
                <div>
                    <label htmlFor="attack">Attack:</label>
                    <input type="number" name="attack"  onChange={handleChange}/>
                    {errors.attack && <p  className={style.error}>{errors.attack}</p> }
                </div>
                <div>
                    <label htmlFor="defense">Defense:</label>
                    <input type="number" name="defense" onChange={handleChange} />
                    {errors.defense && <p className={style.error}>{errors.defense}</p> }
                </div>
                <div>
                    <label htmlFor="speed">Speed:</label>
                    <input type="number" name="speed" onChange={handleChange}/>
                    {errors.speed && <p  className={style.error}>{errors.speed}</p> }
                </div>
                <div>
                    <label htmlFor="height">Height:</label>
                    <input type="number" name="height" onChange={handleChange} />
                    {errors.height && <p  className={style.error}>{errors.height}</p> }
                </div>
                <div>
                    <label htmlFor="weight">Weight:</label>
                    <input type="number" name="weight" onChange={handleChange} />
                    {errors.weight && <p className={style.error} >{errors.weight}</p> }
                </div>
                <div>
                    <label htmlFor="types">Types:</label>
                    <select id="types" name="types" onChange={handleChange} value={'default'}> 
                    <option value="default" disabled>Select types</option>
                        {types.map((type) => (
                            <option key={type.id} value={type.id}>
                                {type.name}
                            </option>
                        ))}
                    </select>
                    {errors.types && <p className={style.error} >{errors.types}</p> }
                   </div>
                  <div>
                   { createdPoke.types.length !== 0 && createdPoke.types.map((typeId, i) => {
                        const type = types.find((typePoke) => typePoke.id === typeId);
                        
                        if (type) {
                        return (
                            
                            <button className={style.button} type='button' key={i} name='types' value={type.name} onClick={()=> {handleChange, deleteType(type.id)}} >
                                {type && type.name}
                            </button>  
                            
                        )} 
                       return null 
                    })}
                 </div>
                  

                <button type='submit' disabled={disabled} className={style.button} >Create</button>
                </div>

            </form>
            </div>
        
    );
}

export default FormPokemon