import React, { useEffect, useState } from 'react';

export const PokemonCard = ({
  name,
  sprites,
  id,
  types,
  stats
}) => {

  return (
    <div className="card" >
      <div className="card-img">
        <img src={sprites.other.dream_world.front_default} alt="pokemon" />
      </div>

      <div className="card-info">
        <div className="card-body">
          <div className="card-body-types">
            {types.map((eachType,i) => <h6 key={i}>{eachType.type.name}</h6>)}
          </div>
          <div className="card-body-points">
            {stats.map((stat,i) => <p key={i}>{stat.stat.name}: <span>{stat.base_stat}</span></p>)}
          </div>
        </div>
        <div className="card-footer">
          <h2>{name}</h2>
          <div  className="card-gif">
            <img 
              src={`https://play.pokemonshowdown.com/sprites/xyani/${name}.gif`}
              alt="gif"
            />
          </div>
        </div>
      </div>
    </div>
  )
}
