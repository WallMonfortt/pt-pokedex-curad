import React,{useState} from 'react'
import { Link } from 'react-router-dom'
import { getPoke } from '../../helpers/getPokemons'
import { useForm } from '../../hooks/useForm'
import {PokemonScreen} from '../pokemons/PokemonScreen'


export const SearchScreen = () => {
  
  const [pokemon, setPokemon] = useState(null);
  const [formValues, handleInputChange] = useForm( {
    searchText:''
  });

  const {searchText} = formValues;

  const handleSearch = async(e) =>{
    e.preventDefault();
    {
      const resp = await getPoke(searchText.toLowerCase());
      setPokemon(resp);
    }
   
  }

  return (
    <div className="container">
      <h1>Search</h1>
      <hr/>

      <div>
        <div>
          <h4>Search your pokemon by name or Id</h4>
          <form 
           onSubmit={handleSearch}
          >
            <input 
              type="text"
              placeholder="Find your pokemon"
              autoComplete="off"
              name="searchText"
              value={searchText}
              onChange={handleInputChange}
            />
            <button
            type="submit"
            className="btn"
            >Search</button>
          </form>
        </div>
          {(searchText === '') &&
            <div>
             Please enter a pokemon name or Id 
            </div>
          }
        <div>
          <h4>Result</h4>
          <hr/>

          {(pokemon  && pokemon.count === undefined) && <PokemonScreen pokemon={pokemon}/>}
        </div>
        <Link className={"pokedex__btn-float"} to="/"><i class="fas fa-chevron-circle-left"></i></Link>
      </div>
    </div>
  )
}
