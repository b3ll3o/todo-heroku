import React, { useState } from 'react';

import { useAdicionaPost } from '../../../hooks';

import Container from './styles';

import Form from '../../../shared/Form';

export default () => {

  const [ titulo, setTitulo ] = useState('');
  const [ conteudo, setConteudo ] = useState('');

  const adicionaPost = useAdicionaPost(titulo, conteudo);

  const setter = set => e => {
    set(e.target.value);
  }

  return (
    <Container>
      <Form 
        onSubmitAction={adicionaPost} 
        campos={<>
          <input placeholder='Titulo' className='primeiroItem' onChange={setter(setTitulo)} />
          <textarea placeholder='Conteudo' onChange={setter(setConteudo)} ></textarea>
          <button type='submit' >Adicionar</button>
        </>} />
    </Container>
  )
}