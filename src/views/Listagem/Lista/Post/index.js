import React from 'react';

import Container from './styles';

import { useDeletePost, useFixadorPost } from '../../../../hooks';

import DeleteAction from '../../../../shared/DeleteAction';
import EditAction from '../../../../shared/EditAction';
import FixadorAction from '../../../../shared/FixadorAction';

export default ({ id, titulo, conteudo, fixado }) => (
  <Container>
    <span className='titulo' >{titulo}</span>
    <FixadorAction status={fixado && fixado} actionClick={useFixadorPost(id)} />
    <span className='conteudo' >{conteudo}</span>
    <DeleteAction action={useDeletePost(id)} />
    <EditAction redirect={'/edit/' + id} />
  </Container>
)