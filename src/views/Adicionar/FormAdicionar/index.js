import React, { useState } from 'react';

import { useAdicionaPost } from '../../../hooks';

import Container from './styles';

import Form from '../../../shared/Form';
import FixadorAction from '../../../shared/FixadorAction';

export default () => {

  const [ titulo, setTitulo ] = useState('');
  const [ conteudo, setConteudo ] = useState('');
  const [ fixado, setFixado ] = useState(false);

  const adicionaPost = useAdicionaPost(titulo, conteudo, fixado);

  const setter = set => e => {
    set(e.target.value);
  }

  const handlerChangeFixado = () => {
    setFixado(!fixado)
  }

  return (
    <Container>
      <Form 
        onSubmitAction={adicionaPost} 
        campos={<>
          <input placeholder='Titulo' className='primeiroItem' onChange={setter(setTitulo)} />
          <FixadorAction status={fixado} actionClick={handlerChangeFixado} />
          <textarea placeholder='Conteudo' onChange={setter(setConteudo)} ></textarea>
          <button type='submit' >Adicionar</button>
        </>} />
    </Container>
  )
}