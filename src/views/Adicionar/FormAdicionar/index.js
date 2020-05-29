import React, { useState } from 'react';

import Container from './styles';

export default () => {

  const [ titulo, setTitulo ] = useState('');
  const [ conteudo, setConteudo ] = useState('');


  const setter = set => e => {
    set(e.target.value);
  }

  const handlerSubmitForm = (titulo, conteudo) => e => {
    e.preventDefault();
    console.log(titulo);
    console.log(conteudo);
  }

  return (
    <Container onSubmit={handlerSubmitForm(titulo, conteudo)} >
      <input placeholder='Titulo' className='primeiroItem' onChange={setter(setTitulo)} />
      <textarea placeholder='Conteudo' onChange={setter(setConteudo)} ></textarea>
      <button type='submit' >Adicionar</button>
    </Container>
  )
}