import React, { useContext } from 'react';
import { Header } from '../../Components/Header/Header';
import { useHistory } from 'react-router-dom';
import { goToHome } from '../../Router/Coordinator';
import { PokedexContainer } from './styled';
import CardPokemonBackground from '../../Assets/CardPokemonBackground.png';
import { CardPokemon } from '../../Components/CardPokemon/CardPokemon';
import GlobalStateContext from '../../Global/GlobalStateContext';
import { PokemonsContainer } from '../HomePage/styled';

export function PokedexPage() {
  const { states, setters, requests } = useContext(GlobalStateContext);

  const renderPokemons = states.pokedex.map((pokemon) => {
    return <CardPokemon button1="add pokedex" name={pokemon.name} />;
  });
  const history = useHistory();
  return (
    <PokedexContainer>
      <Header
        text1="Voltar para lista de pokemons"
        title="Pokedex"
        onClick={() => goToHome(history)}
      />
      <PokemonsContainer>{renderPokemons}</PokemonsContainer>
    </PokedexContainer>
  );
}
