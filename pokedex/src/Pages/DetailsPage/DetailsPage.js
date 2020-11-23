import React from 'react';
import { Header } from '../../Components/Header/Header';
import { goBack } from '../../Router/Coordinator';
import { useHistory } from 'react-router-dom';

export function DetailsPage() {
  const history = useHistory();
  return (
    <Header text1="Voltar" title="Charmander" onClick={() => goBack(history)} />
  );
}
