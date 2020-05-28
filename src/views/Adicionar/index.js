import React from 'react';

import { ThemeProvider } from 'styled-components';
import colored from '../../styles/themes/colored';

import Container from './styles';

import Header from '../../shared/Header';

import FormAdicionar from './FormAdicionar'; 

export default () => {

  return (
    <ThemeProvider theme={colored}>
      <Container>
        <Header />
        <FormAdicionar />
      </Container>
    </ThemeProvider>
  )
}