import { ADD_POKEMON, POKE_DETAIL, POKE_NAME, POKE_TYPES, ORDER_POKES, FILTER_TYPES, CREATE_POKEMON, 
    POKE_STORAGE, SET_ACCES, SET_USERID, ADD_FAVORITE, DELETE_DETAIL } from "./types";


const initialState = {
    allPokemons: [],
    pokemonsFiltered: [],
    pokemonDetail: {},
    pokemonTypes: [],
    typeFiltered: [],
    pokemonStorage: [],
    filterByStorage: [],
    favorites:  [],
    setAcces: false,
    userId: {}
};


const reducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case ADD_POKEMON:
            return {
                ...state,
                allPokemons: payload,
                pokemonsFiltered: payload
            }

        case POKE_DETAIL:
            return {
                ...state,
                pokemonDetail: payload
            }
        case POKE_NAME:
            return {
                ...state,
                pokemonDetail: payload
            }
        case POKE_TYPES:
            return {
                ...state,
                pokemonTypes: payload
            }
       
            case ORDER_POKES:
            let pokemonsCopy = [...state.pokemonsFiltered]
            switch (payload) {
                case 'a-z':
                    pokemonsCopy.sort((a, b) => a.name.toLowerCase().localeCompare(b.name));
                    break;
                case 'z-a':
                    pokemonsCopy.sort((a, b) => b.name.toLowerCase().localeCompare(a.name));
                    break;
                case 'ATTACK_ASC':
                    pokemonsCopy.sort((a, b) => a.attack - b.attack);
                    break;
                case 'ATTACK_DESC':
                    pokemonsCopy.sort((a, b) => b.attack - a.attack);
                    break;
                default:
                
                    break;
            }
             return {
                ...state,
                pokemonsFiltered: pokemonsCopy
                 
            }
        case FILTER_TYPES:
        
        let pokemonsByType= [];
        payload === 'all' ? pokemonsByType= state.allPokemons : 
        pokemonsByType = state.allPokemons.filter(pokemon => {
            
            return pokemon.types.some((type) => type.name === payload);
        });
            return {
                ...state,
                typeFiltered: pokemonsByType,
                pokemonsFiltered: pokemonsByType
            }

        case CREATE_POKEMON:
            return {
                ...state,
                allPokemons: [...state.allPokemons, payload],
                pokemonsFiltered: [...state.pokemonsFiltered, payload]
            }    
        case POKE_STORAGE:
            let updateByStorage = [];
            let filterStorage = payload || state.filterByStorage;
            if (filterStorage === 'all') {
                state.typeFiltered.length === 0 ? updateByStorage = state.allPokemons: updateByStorage = state.typeFiltered
            } else if (filterStorage === 'bd') {
                state.typeFiltered.length === 0 ? updateByStorage = state.allPokemons.filter((pokemon) => isNaN(pokemon.id)):
                updateByStorage = state.typeFiltered.filter((pokemon) => isNaN(pokemon.id));

            } else {
                state.typeFiltered.length === 0 ? 
                updateByStorage = state.allPokemons.filter((pokemon) => !isNaN(pokemon.id)):
                updateByStorage = state.typeFiltered.filter((pokemon) => !isNaN(pokemon.id));
            };
            return {
                ...state,
                filterByStorage: filterStorage,
                pokemonStorage: updateByStorage,
                pokemonsFiltered: updateByStorage
            }
        case SET_ACCES:
            return {
                ...state,
                setAcces: payload
            }    

            case DELETE_DETAIL:
            return {
                ...state,
                pokemonDetail: {}
            }

        case SET_USERID:
            return {
                ...state,
                userId: payload
            }   
        case ADD_FAVORITE:
            
        
        
        return {
                ...state,
                favorites: [...state.favorites, payload]
            }     
        

        default: return { ...state }
    }
};


console.log();



export default reducer