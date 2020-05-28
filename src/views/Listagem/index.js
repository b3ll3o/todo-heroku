import React from 'react';

import Container from './styles';

import { Link } from 'react-router-dom';

export default () => {

  return (
    <Container>
      bem-vindo <Link to='/add'>adicionar</Link>
    </Container>
  )
}