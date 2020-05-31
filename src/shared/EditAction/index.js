import React from 'react';

import Container from './styles';

import { ReactComponent as EditIcon } from '../../assets/icons/edit.svg';

import Action from '../Action';

export default () => {

  return (
    <Container>
      <Action action={<EditIcon />} />
    </Container>
  )
}