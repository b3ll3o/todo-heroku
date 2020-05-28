import React from 'react';

import Container from './styles';

import { Link } from 'react-router-dom';

export default () => {

  return (
    <Container>
      <Link to='/'>todo-io</Link>
    </Container>
  )
}