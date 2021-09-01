import React, { useEffect, useState } from 'react'
import { PokemonCard } from './PokemonCard';
import Pagination from '@material-ui/lab/Pagination';
import { Link } from 'react-router-dom';

export const PokemonList = ({pokemons, totalPokemons,page,total,setTotal,setPage}) => {
  const [totalPages, setTotalPages] = useState( Math.ceil(totalPokemons / total))
  
  useEffect(() => {
    setTotalPages(Math.ceil(totalPokemons / total))
  }, [total,totalPokemons])
  
  const handleChange = ( e, value) => {
    setPage(value - 1)
  };

  const onSelect =(e) =>{
    setTotal(e)
  }
  return (
    <>
      <div>
        <div className="pokedex__pagination">
          <Pagination 
            count={totalPages}
            siblingCount={1}
            size="medium" 
            onChange={handleChange}
          />
        </div>
        
        <div className="pokedex__select">
          #Pokemons:
          <select className="ms-2" defaultValue={8} onChange={(e) => onSelect(e.target.value)}>
          <option value={4}>4</option>
          <option value={8}>8</option>
          <option value={12}>12</option>
          <option value={16}>16</option>
          <option value={20}>20</option>
        </select>
        </div>
      </div>
      <div className="pokedex flex row animate__animated animate__fadeIn">
      {pokemons.map(pokemon=>(
        <PokemonCard key={pokemon.id}
          {...pokemon}
        />
      ))}
      </div>
      <Link className={"pokedex__btn-float"} to="/search"><i class="fas fa-search"></i></Link>
    </>
  )
}
