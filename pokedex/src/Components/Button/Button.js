import React from 'react';
import { ButtonContainer } from './styled';
export function Button(props) {
  return (
    <ButtonContainer onClick={props.onClick}>{props.text}</ButtonContainer>
  );
}
