import React, { useEffect, useState } from 'react';
import { Button } from '../Button/Button';
import { CardContainer } from './styled';
import { goToDetails } from '../../Router/Coordinator';
import { useHistory } from 'react-router-dom';
import axios from 'axios'

export function CardPokemon(props) {
  const history = useHistory();
  const [pokemonPhoto, setPokemonPhoto] = useState();

  useEffect(() => {
    getPokemonPhoto();
  }, []);

  const getPokemonPhoto = (pokemon) => {
    axios
      .get(`https://pokeapi.co/api/v2/pokemon/${props.name}`)
      .then((resposta) => {
        setPokemonPhoto(resposta.data.sprites.front_default);
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  console.log(pokemonPhoto)

  return (
    <CardContainer backgroundImage={props.backgroundImage}>
      <img src={pokemonPhoto} />
      <h3>{props.name}</h3>
      <div>
        <Button
          text={props.button1}
          background="#E42256"
          width="8vw"
          hoverBackground="#FF8370"
        />
        <Button
          text="ver detalhes"
          onClick={() => goToDetails(history)}
          background="#E42256"
          width="8vw"
          hoverBackground="#FF8370"
        />
      </div>
    </CardContainer>
  );
}
