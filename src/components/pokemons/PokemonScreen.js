import React from 'react'

export const PokemonScreen = ({pokemon}) => {
  return (
    <div className="container">
      <h1>{pokemon.name}</h1>
      <div className="card" >
      <div className="card-img">
        <img src={pokemon.sprites.other.dream_world.front_default} alt="pokemon" />
      </div>

      <div className="card-info"
        style={{backgroundColor: `${pokemon.type}`}}
      >
        <div className="card-body">
          <div className="card-body-types">
            {pokemon.types.map((eachType,i) => <h6 key={i}>{eachType.type.name}</h6>)}
          </div>
          <div className="card-body-points">
            {pokemon.stats.map((stat,i) => <p key={i}>{stat.stat.name}: <span>{stat.base_stat}</span></p>)}
          </div>
        </div>
        <div className="card-footer">
          <h2>{pokemon.name}</h2>
          <div  className="card-gif">
            <img 
              src={`https://play.pokemonshowdown.com/sprites/xyani/${pokemon.name}.gif`}
              alt="gif"
            />
          </div>
        </div>
      </div>
    </div>
    </div>
  )
}
