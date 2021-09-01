import axios from 'axios';

export const getPokemons = async(limit = 8, offset=0) =>{
  const res = await axios({
    method:"GET",
    url:`?limit=${limit}&offset=${offset}`,
    baseURL:`https://pokeapi.co/api/v2/pokemon`
  });
  return res.data
}

export const getPokeData = async(url) => {
  const res = await axios({
    method:"GET",
    baseURL:`${url}`
  });
  return ( res.data )
}

export const getPoke = async(search) =>{
  const res = await axios({
    method:"GET",
    baseURL:`https://pokeapi.co/api/v2/pokemon/${search}`
  });
  return res.data
}
