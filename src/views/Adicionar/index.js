import React from 'react';

import Container from './styles';

import Header from '../../shared/Header';
import VoltarAction from '../../shared/VoltarAction';

import FormAdicionar from './FormAdicionar'; 

export default () => {

  return (
    
    <Container>
      <Header action={<VoltarAction redirect='/' />} />
      <FormAdicionar />
    </Container>
  )
}