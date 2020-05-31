import React from 'react';

import Container from './styles';

export default ({ campos, onSubmitAction }) => {

  return (
    <Container onSubmit={onSubmitAction}>
      { campos && campos }
    </Container>
  );
}