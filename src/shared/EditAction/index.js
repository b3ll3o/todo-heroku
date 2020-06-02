import React from 'react';

import Container from './styles';

import { ReactComponent as EditIcon } from '../../assets/icons/edit.svg';

import { Link } from 'react-router-dom';

import Action from '../Action';

export default ({ action, redirect }) => {

  return (
    <Container>
      { redirect && <Action action={<Link to={redirect}><EditIcon /></Link>} /> }
    </Container>
  )
}