import React from 'react';

import Container from './styles';

import { ReactComponent as FixadoIcon } from '../../assets/icons/fixado.svg';
import Action from '../Action';

export default ({ status, actionClick }) => {

  return (
    <Container>
      <Action action={<FixadoIcon 
        className={status ? 'ativo' : 'desativo'}
        onClick={actionClick} />} />
    </Container>
  )
}