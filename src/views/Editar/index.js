import React, { useState } from 'react';

import Container from './styles';

import { useParams } from 'react-router-dom';

import { useEditPost } from '../../hooks';

import Form from '../../shared/Form';
import Header from '../../shared/Header';
import FixadorAction from '../../shared/FixadorAction';

export default () => {

  const { id } = useParams();

  const [ tituloEditado, setTituloEditado ] = useState('');
  const [ conteudoEditado, setConteudoEditado ] = useState('');
  const [ fixadoEditado, setFixadoEditado ] = useState(false);

  const [ titulo, conteudo, fixado, editPost ] = useEditPost(id, tituloEditado, conteudoEditado, fixadoEditado);

  const setter = set => e => {
    e.preventDefault();
    set(e.target.value);
  }

  const handlerChangeFixador = () => {
    setFixadoEditado(!fixadoEditado);
  }

  return (
    <Container>
      <Header />
      <Form 
        onSubmitAction={editPost}
        campos={
          <>
            <input defaultValue={titulo && titulo} onChange={setter(setTituloEditado)} />
            <FixadorAction defaultValue={fixado && fixado}  status={fixadoEditado} actionClick={handlerChangeFixador} />
            <textarea defaultValue={conteudo && conteudo} onChange={setter(setConteudoEditado)} ></textarea>
            <button type='submit'>Editar</button>
          </>
        } />
    </Container>
  )
}