import React from 'react';
import { Header } from '../../Components/Header/Header';
import { useHistory } from 'react-router-dom';
import { goToHome } from '../../Router/Coordinator';
import { PokedexContainer } from './styled';
import CardPokemonBackground from '../../Assets/CardPokemonBackground.png';
import { CardPokemon } from '../../Components/CardPokemon/CardPokemon';

export function PokedexPage() {
  const history = useHistory();
  return (
    <PokedexContainer>
      <Header
        text1="Voltar para lista de pokemons"
        title="Pokedex"
        onClick={() => goToHome(history)}
      />
      <CardPokemon
        button1="remover pokedex"
        backgroundImage={CardPokemonBackground}
      />
    </PokedexContainer>
  );
}
