import React from 'react';

import Container from './styles';

import { ReactComponent as DeleteIcon } from '../../assets/icons/delete.svg';

import Action from '../Action';

export default ({ action }) => {

  return (
    <Container>
      <Action action={<DeleteIcon onClick={action} />}/>
    </Container>
  )
}