import style from './PokeDetail.module.css'

const PokeDetail = ({ pokemon }) => {
    console.log(pokemon);

    return (

        <div className={style.detail}>
            <div className={style.container}>
                <div className={style.pokemon}>

                    <div className={style.background}><img className={style.image} src={pokemon?.image} alt={pokemon?.name} /></div>
                   <div className={style.content}>
                    <h2 className={style.name}>{pokemon?.name}</h2>

                    <div className={style.stats}> {isNaN(+pokemon?.id) ? null : (<p>Id:{pokemon?.id}</p>)}

                        <p>Types:</p>

                        {pokemon?.types ? (
                            pokemon.types.map((type, index) => (
                                <span  className={style.type} key={index}>{type.name}</span>
                            ))
                        ) : (
                            <span>No types available</span>
                        )}

                        <p>Life : {pokemon?.life}</p>
                        <p>Attack : {pokemon?.attack}</p>
                        <p>Defense : {pokemon?.defense}</p>
                        {pokemon?.speed && <p>Speed : {pokemon.speed}</p>}
                        {pokemon?.height && <p>Height : {pokemon.height}</p>}
                        {pokemon?.weight && <p>Weight : {pokemon.weight}</p>}
                    </div>
                </div>
            </div>
        </div>
        </div>
    )
};

export default PokeDetail