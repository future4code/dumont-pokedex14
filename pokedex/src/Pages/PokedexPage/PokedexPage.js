import React from 'react';
import { Header } from '../../Components/Header/Header';
import { useHistory } from 'react-router-dom';
import { goToHome } from '../../Router/Coordinator';

export function PokedexPage() {
  const history = useHistory();
  return (
    <div>
      <Header
        text1="Voltar para lista de pokemons"
        title="Pokedex"
        onClick={() => goToHome(history)}
      />
    </div>
  );
}
