import React, { useState } from 'react';

import { useDispatch } from 'react-redux';
import * as PostActions from '../../../store/actions/PostActions';

import Container from './styles';

export default () => {

  const dispatch = useDispatch();

  const [ titulo, setTitulo ] = useState('');
  const [ conteudo, setConteudo ] = useState('');

  const setter = set => e => {
    set(e.target.value);
  }

  const handlerSubmitForm = (titulo, conteudo) => e => {
    e.preventDefault();
    dispatch(PostActions.create({ titulo, conteudo }));
  }

  return (
    <Container onSubmit={handlerSubmitForm(titulo, conteudo)} >
      <input placeholder='Titulo' className='primeiroItem' onChange={setter(setTitulo)} />
      <textarea placeholder='Conteudo' onChange={setter(setConteudo)} ></textarea>
      <button type='submit' >Adicionar</button>
    </Container>
  )
}