import React, { useState } from 'react';
import axios from 'axios';
import GlobalStateContext from './GlobalStateContext';

const GlobalState = (props) => {
  const [pokemons, setPokemons] = useState([]);
  const [pokemonData, setPokemonData] = useState();
  const [pokedex, setPokedex] = useState([]);

  const getPokemons = () => {
    axios
      .get('https://pokeapi.co/api/v2/pokemon/')
      .then((resposta) => {
        setPokemons(resposta.data.results);
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  const getPokemonData = (namePokemon) => {
    axios
      .get(`https://pokeapi.co/api/v2/pokemon/${namePokemon}`)
      .then((resposta) => {
        setPokemonData(resposta.data);
        console.log(namePokemon)
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  const states = { pokemons, pokemonData, pokedex };
  const setters = { setPokemons, setPokemonData, setPokedex };
  const requests = { getPokemons, getPokemonData };

  const data = { states, setters, requests };
  return (
    <GlobalStateContext.Provider value={data}>
      {props.children}
    </GlobalStateContext.Provider>
  );
};

export default GlobalState;
