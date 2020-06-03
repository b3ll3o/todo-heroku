import React from 'react';

import Container from './styles';

import { ReactComponent as FixadoIcon } from '../../assets/icons/fixado.svg';
import Action from '../Action';

export default ({ status, action }) => {

  return (
    <Container>
      <Action action={<FixadoIcon 
        className={status ? 'ativo' : 'desativo'}
        onClick={action} />} />
    </Container>
  )
}