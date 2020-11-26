import React, { useEffect, useState, useContext } from 'react';
import { Header } from '../../Components/Header/Header';
import { useHistory } from 'react-router-dom';
import { goToPokedex } from '../../Router/Coordinator';
import { CardPokemon } from '../../Components/CardPokemon/CardPokemon';
import { HomeContainer, PokemonsContainer } from './styled';
import GlobalStateContext from '../../Global/GlobalStateContext';

export function HomePage() {
  const { states, setters, requests } = useContext(GlobalStateContext);

  const history = useHistory();

  useEffect(() => {
    requests.getPokemons();
  }, []);

  const addPokemonToPokedex = (pokemon) => {
    let newPokedex = [...states.pokedex];
    newPokedex.push(pokemon);
    setters.setPokedex(newPokedex);
    alert(`${pokemon.name} foi adiciona a sua pokedex`);
    console.log(states.pokedex);
  };
  
  const renderPokemons = states.pokemons && states.pokemons.map((pokemon) => {
    return (
      <CardPokemon
        button1="add pokedex"
        name={pokemon.name}
        onClickButton={() => addPokemonToPokedex(pokemon)}
      />
    );
  });

  return (
    <HomeContainer>
      <Header
        text1="Ir para Pokedex"
        title="Lista de Pokemons"
        onClick={() => goToPokedex(history)}
      />
      <PokemonsContainer>{renderPokemons}</PokemonsContainer>
    </HomeContainer>
  );
}
