import React from 'react';

import Container from './styles';

import { useDeletePost } from '../../../../hooks';

import DeleteAction from '../../../../shared/DeleteAction';
import EditAction from '../../../../shared/EditAction';

export default ({ id, titulo, conteudo }) => (
  <Container>
    <span className='titulo' >{titulo}</span>
    <span className='conteudo' >{conteudo}</span>
    <DeleteAction action={useDeletePost(id)} />
    <EditAction redirect={'/edit/' + id} />
  </Container>
)