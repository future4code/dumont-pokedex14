import React from 'react';
import {
  CardPokemon,
  LeftContainer,
  CardPhoto,
  CardDetails,
  ContainerAtaques,
  CardPowers,
} from './styled';
import { goBack } from '../../Router/Coordinator';
import { useHistory } from 'react-router-dom';
import { DetailsContainer } from './styled';
import arrowIcon from '../../Assets/arrowIcon.svg';

export function DetailsPage() {
  const history = useHistory();

  return (
    <DetailsContainer>
      <LeftContainer>
        <div>
          <img src={arrowIcon} onClick={() => goBack(history)} />
          <p onClick={() => goBack(history)}>Voltar</p>
        </div>
        <h1>Charmander</h1>
        <h4>fire</h4>
      </LeftContainer>
      <CardPokemon>
        <CardPhoto>
          <img src="https://i.pinimg.com/originals/7a/f6/0b/7af60b2b6fa202db54f0aa275fee6e17.png" />
        </CardPhoto>
        <CardDetails>
          <h3>Poderes</h3>
          <CardPowers>
            <p>
              hp<strong>30</strong>
            </p>
            <p>
              attack<strong>30</strong>
            </p>
            <p>
              defense<strong>30</strong>
            </p>
            <p>
              special-attack<strong>30</strong>
            </p>
            <p>
              special-defense<strong>30</strong>
            </p>
            <p>
              speed<strong>30</strong>
            </p>
          </CardPowers>
          <h3>Principais Ataques</h3>
          <ContainerAtaques>
            <p>cut</p>
            <p>headbutt</p>
            <p>take-down</p>
            <p>tackle</p>
            <p>body-slam</p>
          </ContainerAtaques>
        </CardDetails>
      </CardPokemon>
    </DetailsContainer>
  );
}
