import React from 'react';

import Container from './styles';

import { useDeletePost, useFixadorPost } from '../../../../hooks';

import DeleteAction from '../../../../shared/DeleteAction';
import EditAction from '../../../../shared/EditAction';
import FixadorAction from '../../../../shared/FixadorAction';

export default ({ id, titulo, conteudo, fixado }) => (
  <Container>
    <div className='destaque'>
      <span className='titulo' >{titulo}</span>
      <FixadorAction status={fixado && fixado} actionClick={useFixadorPost(id)} />
    </div>
    <span className='conteudo' >{conteudo}</span>
    <div className='actions'>
      <DeleteAction action={useDeletePost(id)} />
      <EditAction redirect={'/edit/' + id} />
    </div>
  </Container>
)