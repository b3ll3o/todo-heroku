import React from 'react';

import { BrowserRouter as Router, Route} from 'react-router-dom';

import Listagem from './views/Listagem';
import Adicionar from './views/Adicionar';

export default () => (
  <Router>
    <Route path='/' exact>
      <Listagem />
    </Route>

    <Route path='/add'>
      <Adicionar />
    </Route>
  </Router>
);


