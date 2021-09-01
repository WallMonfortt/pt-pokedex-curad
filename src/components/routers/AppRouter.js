import React from 'react'
import {
  BrowserRouter as Router,Switch,Route,Redirect
} from "react-router-dom";
import { PokemonsAll } from '../pokemons/PokemonsAll';
import { SearchScreen } from '../Search/SearchScreen';
import { NavBar } from '../UI/NavBar';

export const AppRouter = () => {
  return (
    <>
      <Router>
        <div>
          <NavBar />
          <Switch>
            <Route exact path="/" component={PokemonsAll} />
            <Route exact path="/search" component={SearchScreen} />

            <Redirect to="/" />
          </Switch>
        </div>
      </Router>
    </>
  )
}
