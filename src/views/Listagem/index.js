import React, { useEffect } from 'react';

import { useSelector } from 'react-redux';

import Container from './styles';

import { Link } from 'react-router-dom';

export default () => {

  const { post } = useSelector(state => state);

  return (
    <Container>
      bem-vindo <Link to='/add'>adicionar</Link>
      { console.log(post) }
    </Container>
  )
}