import React, { useEffect, useContext } from 'react';
import { Button } from '../Button/Button';
import { CardContainer } from './styled';
import { goToDetails } from '../../Router/Coordinator';
import { useHistory } from 'react-router-dom';
import axios from 'axios';
import GlobalStateContext from '../../Global/GlobalStateContext';

export function CardPokemon(props) {
  const { states, setters, requests } = useContext(GlobalStateContext);
  const history = useHistory();
  useEffect(() => {
    requests.getPokemonPhoto(props.name);
  }, []);

  // const getPokemonPhoto = (pokemon) => {
  //   axios
  //     .get(`https://pokeapi.co/api/v2/pokemon/${props.name}`)
  //     .then((resposta) => {
  //       setPokemonPhoto(resposta.data.sprites.front_default);
  //     })
  //     .catch((err) => {
  //       console.log(err.message);
  //     });
  // };

  return (
    <CardContainer backgroundImage={props.backgroundImage}>
      <img src={states.pokemonPhoto} />
      <h3>{props.name}</h3>
      <div>
        <Button
          text={props.button1}
          background="#E42256"
          width="8vw"
          hoverBackground="#FF8370"
          onClick={props.onClickButton}
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
