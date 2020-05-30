import React from 'react';

import Container from './styles';

import { Link } from 'react-router-dom';

import Action from '../Action';

export default ({ redirect, icon }) => {

  return (
    <Container>
      <Action action={<Link to={redirect} >{ icon }</Link>} />  
    </Container>
  );
}