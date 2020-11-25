import React, { useState } from 'react';
import axios from 'axios';
import GlobalStateContext from './GlobalStateContext';

const GlobalState = (props) => {
  const [pokemons, setPokemons] = useState([]);
  const [pokemonPhoto, setPokemonPhoto] = useState();
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

  const getPokemonPhoto = (namePokemon) => {
    axios
      .get(`https://pokeapi.co/api/v2/pokemon/${namePokemon}`)
      .then((resposta) => {
        setPokemonPhoto(resposta.data.sprites.front_default);
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  const states = { pokemons, pokemonPhoto };
  const setters = { setPokemons, setPokemonPhoto };
  const requests = { getPokemons, getPokemonPhoto };

  const data = { states, setters, requests };
  return (
    <GlobalStateContext.Provider value={data}>
      {props.children}
    </GlobalStateContext.Provider>
  );
};

export default GlobalState;
