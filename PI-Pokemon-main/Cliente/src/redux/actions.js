import axios from 'axios';
import { ADD_POKEMON, POKE_DETAIL, POKE_NAME, POKE_TYPES, ORDER_POKES, FILTER_TYPES, CREATE_POKEMON,
    POKE_STORAGE, SET_ACCES, SET_USERID, ADD_FAVORITE, DELETE_DETAIL } from './types';
const URL = 'http://localhost:3001/pokemons'


export const addPokemons = () => {

   return async (dispatch) => {
      try {
         const { data } = await axios(URL);
         if (!data.length) throw Error('There are no pokemons')

         await dispatch({
            type: ADD_POKEMON,
            payload: data,
         });
      }
      catch (error) {
         console.log(error.message)
      }

   };
};

export const pokeDetail = (id) => {
   return async (dispatch) => {
      try {
         const { data } = await axios(`${URL}/${id}`);

         if (!data.name) throw Error('Something went wrong')

         await dispatch({
            type: POKE_DETAIL,
            payload: data,
         });

      } catch (error) {
         console.log(error.message)
      }
   }
}

export const pokeName = (name) => {
   return async (dispatch) => {
      try {
         const pokemonName = name.toLowerCase();
         const { data } = await axios(`${URL}?name=${pokemonName}`);
         if (!data.name) throw Error('Something went wrong')

         await dispatch({
            type: POKE_NAME,
            payload: data,
         });


      } catch (error) {
         console.log(error.message)
      }
   }
}

export const pokeTypes = () => {
   const URL = 'http://localhost:3001/types';
   return async (dispatch) => {
      try {
         const { data } = await axios(URL);
         await dispatch({
            type: POKE_TYPES,
            payload: data,
         });
      } catch (error) {
         console.log(error.message)
      }
   }
}

export const orderPokes = (order) => {
   return {
      type: ORDER_POKES,
      payload: order
   }
}

export const filterTypes = (types) => {
   return {
      type: FILTER_TYPES,
      payload: types
   }
}

export const createPokemon = (pokemon) => {
   return async (dispatch) => {
      try {
          
          const { data } = await axios.post(URL, pokemon);
          await dispatch({
              type: CREATE_POKEMON,
              payload: data
          });
          
      } catch (error) {
          console.log(error.message)
      }
  };


  }

  export const pokeStorage = (storage) => {
    return {
      type: POKE_STORAGE,
      payload: storage
    }
  }

  export const setAccess = (access) => {
    return {
      type: SET_ACCES,
      payload: access
    }
  }
  
  export const setUserId = (userId) => {
     return {
        type: SET_USERID,
        payload: userId
     }
   
  };

  export const addFavorites = (userId, name) => {
   return async (dispatch) => {
     try {
      const favorite= {userId: userId, name: name} 
       const {data}= await axios.post('http://localhost:3001/favorites', favorite);
       if(!data.length) throw Error('There is not favorites')

           return dispatch({
              type: ADD_FAVORITE,
              payload: data,
           });
        }
     catch (error) {
        console.log(error.message)
     }
    
   };
  };

  export const deleteDetail = () => {
     return {
        type: DELETE_DETAIL,
     }
  }
