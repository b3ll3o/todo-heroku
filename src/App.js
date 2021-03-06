import React from 'react';

import { BrowserRouter as Router, Route} from 'react-router-dom';

import { ThemeProvider } from 'styled-components';
import colored from './styles/themes/colored';

import Listagem from './views/Listagem';
import Adicionar from './views/Adicionar';
import Editar from './views/Editar';

export default () => (
  
  <ThemeProvider theme={colored}>
    <Router>
      <Route path='/' exact>
        <Listagem />
      </Route>

      <Route path='/add'>
        <Adicionar />
      </Route>

      <Route path='/edit/:id'>
        <Editar />
      </Route>
    </Router>
  </ThemeProvider>
);


