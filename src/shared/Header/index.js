import React from 'react';

import Container from './styles';

import { Link } from 'react-router-dom';

export default ({ action }) => {

  return (
    <Container>
      { action && action }
      <Link to='/'>todo-io</Link>
    </Container>
  )
}