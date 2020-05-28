import React from 'react';

import Container from './styles';

export default () => {

  return (
    <Container>
      <input placeholder='Titulo' className='primeiroItem' />
      <textarea placeholder='Conteudo' ></textarea>
      <button>Adicionar</button>
    </Container>
  )
}