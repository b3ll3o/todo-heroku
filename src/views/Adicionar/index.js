import React from 'react';

import { ThemeProvider } from 'styled-components';
import colored from '../../styles/themes/colored';

import Container from './styles';

import Header from '../../shared/Header';

export default () => {

  return (
    <ThemeProvider theme={colored}>
      <Container>
        <Header />
        adicionar
      </Container>
    </ThemeProvider>
  )
}