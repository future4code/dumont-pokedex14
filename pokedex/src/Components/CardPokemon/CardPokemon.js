import React from 'react';
import { Button } from '../Button/Button';
import { CardContainer } from './styled';
import { goToDetails } from '../../Router/Coordinator';
import { useHistory } from 'react-router-dom';

export function CardPokemon(props) {
  const history = useHistory();

  return (
    <CardContainer backgroundImage={props.backgroundImage}>
      <img src={props.url} />
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
