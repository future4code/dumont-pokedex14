import React from 'react';
import { Button } from '../Button/Button';
import { CardContainer } from './styled';
import { goToDetails } from '../../Router/Coordinator';
import { useHistory } from 'react-router-dom';

export function CardPokemon(props) {
  const history = useHistory();
  return (
    <CardContainer>
      <img src="https://i.pinimg.com/originals/7a/f6/0b/7af60b2b6fa202db54f0aa275fee6e17.png" />
      <div>
        <Button text={props.button1} />
        <Button text="Ver detalhes" onClick={() => goToDetails(history)} />
      </div>
    </CardContainer>
  );
}
