import React, { useEffect, useState } from 'react';
import { Header } from '../../Components/Header/Header';
import { useHistory } from 'react-router-dom';
import { goToPokedex } from '../../Router/Coordinator';
import { CardPokemon } from '../../Components/CardPokemon/CardPokemon';
import { HomeContainer } from './styled';
import axios from 'axios';

export function HomePage() {
  const [pokemons, setPokemons] = useState([]);
  const [pokemonPhoto, setPokemonPhoto] = useState();
  const history = useHistory();
  useEffect(() => {
    getPokemons();
  }, []);
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
  const getPokemonPhoto = (pokemon) => {
    axios
      .get(`https://pokeapi.co/api/v2/pokemon/${pokemon.name}`)
      .then((resposta) => {
        setPokemonPhoto(resposta.data.sprites.front_default);
        console.log(pokemonPhoto);
        return pokemonPhoto;
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  const renderPokemons = pokemons.map((pokemon) => {
    return <CardPokemon button1="add pokedex" url={pokemonPhoto} />;
  });

  return (
    <HomeContainer>
      <Header
        text1="Ir para Pokedex"
        title="Lista de Pokemons"
        onClick={() => goToPokedex(history)}
      />
      {renderPokemons}
    </HomeContainer>
  );
}
