import React from 'react';
import { HeaderContainer } from './styled';
import { Button } from '../Button/Button';

export function Header(props) {
  return (
    <HeaderContainer>
      <Button text={props.text1} onClick={props.onClick} />
      <h1>{props.title}</h1>
    </HeaderContainer>
  );
}
