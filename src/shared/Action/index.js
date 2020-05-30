import React from 'react';

import Container from './styles';

export default ({ action }) => {

  return (
    <Container>
      { action && action }
    </Container>
  );
}