import React from 'react';
import { Header } from '../../Components/Header/Header';
import { useHistory } from 'react-router-dom';
import { goToPokedex } from '../../Router/Coordinator';
import { CardPokemon } from '../../Components/CardPokemon/CardPokemon';

export function HomePage() {
  const history = useHistory();

  return (
    <div>
      <Header
        text1="Ir para Pokedex"
        title="Lista de Pokemons"
        onClick={() => goToPokedex(history)}
      />
      <CardPokemon button1="Adicionar a Pokedex" />
    </div>
  );
}
