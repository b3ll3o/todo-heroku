import React from 'react';

import Container from './styles';

import { ReactComponent as VoltarIcon } from '../../assets/icons/voltar.svg';

import { Link } from 'react-router-dom';

import Action from '../Action';

export default ({ redirect }) => {

  return (
    <Container>
      { redirect && <Action action={<Link to={redirect}><VoltarIcon /></Link>} /> } 
    </Container>
  )
}