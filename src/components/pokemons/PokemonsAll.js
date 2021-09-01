import React, { useEffect, useState } from 'react'
import { getPokeData, getPokemons } from '../../helpers/getPokemons'
import { PokemonList } from './PokemonList';
import { SearchScreen } from '../Search/SearchScreen';

export const PokemonsAll = () => {
  const [totalPokemons, setTotalPokemons] = useState(0);
  const [pokemons, setPokemons] = useState([]);
  const [total, setTotal] = useState(8)
  const [page, setPage] = useState(0)
  
  useEffect(() => {
    const getAllPokemons = async() => {
      const data = await getPokemons(total, total * page);
      setTotalPokemons(data.count)
      const promises = data.results.map(async(pokemon) =>{
        return await getPokeData(pokemon.url)
      })
      const results = await Promise.all(promises)
      setPokemons(results);
    }
    getAllPokemons();
    
  }, [page, total]);
  return (
    <div className="container">
      <PokemonList 
      pokemons = {pokemons} 
      totalPokemons={totalPokemons}
      page={page}
      setPage={setPage}
      total={total}
      setTotal={setTotal}
    />
    </div>
  )
}
