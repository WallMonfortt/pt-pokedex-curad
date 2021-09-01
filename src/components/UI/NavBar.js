import React from 'react';
import { Link } from 'react-router-dom';

export const NavBar = () => {
  const imgUrl ='https://raw.githubusercontent.com/PokeAPI/media/master/logo/pokeapi_256.png'
  return (
    <nav className="navbar__main">
      <img 
        src={imgUrl}
        alt="logo-pokeAPI"
        className="navbar__img"
      />
      <div className="navbar__items">
        <div className="navbar__mob-menu">
          <input type="checkbox" />
          <i className="fas fa-bars"/>
          <i className="fa fa-times"/>
          <nav>
            <ul>
              <Link
                className="navbar__items-link"
                to="/"
              >Pokedex
              </Link>
              <Link
                className="navbar__items-link"
                to="/search"
              >search
            </Link>
            </ul>
          </nav>
        </div>
      </div>
    </nav>
  )
}
