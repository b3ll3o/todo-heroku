import React, { useState } from 'react';

import Container from './styles';

import { useParams } from 'react-router-dom';

import { useEditPost } from '../../hooks';

import Form from '../../shared/Form';
import Header from '../../shared/Header';

export default () => {

  const { id } = useParams();

  const [ tituloEditado, setTituloEditado ] = useState('');
  const [ conteudoEditado, setConteudoEditado ] = useState('');

  const [ titulo, conteudo, editPost ] = useEditPost(id, tituloEditado, conteudoEditado);

  const setter = set => e => {
    e.preventDefault();
    set(e.target.value);
  }

  return (
    <Container>
      <Header />
      <Form 
        onSubmitAction={editPost}
        campos={
          <>
            <input defaultValue={titulo && titulo} onChange={setter(setTituloEditado)} />
            <textarea defaultValue={conteudo && conteudo} onChange={setter(setConteudoEditado)} ></textarea>
            <button type='submit'>Editar</button>
          </>
        } />
    </Container>
  )
}