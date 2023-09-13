const { Router } = require('express');
const {allPokemons}= require('../controllers/allPokemons');
const {pokemonById}= require('../controllers/PokemonById')
const {getTypes}= require('../controllers/getTypes');
const {postPokemons}= require('../controllers/postPokemons');
const {postUser}= require('../controllers/postUser');
const {login}= require('../controllers/login');
const {addFavorites}= require('../controllers/postFavorites');
const {getUserPokemons}= require('../controllers/getUser');
const {deletePokemon}= require('../controllers/deletePokemon');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');


const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
router.get('/pokemons', allPokemons);

router.get('/pokemons/:id', pokemonById );

router.post('/pokemons', postPokemons );

router.get('/types',  getTypes );

router.post('/user', postUser);

router.post('/login', login);

router.post('/favorites', addFavorites); 

router.get('/user/:id', getUserPokemons);

router.delete('/user/:id', deletePokemon);








module.exports = router;
