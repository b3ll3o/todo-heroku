import React from 'react';

import Container from './styles';

import { useDeletePost } from '../../../hooks';

import DeleteAction from '../../../shared/DeleteAction';

export default ({ posts }) => {

  return (
    <Container>
      { posts && posts.map(post =>
        <div className='content'>
          <span className='titulo' >{post.titulo}</span>
          <span className='conteudo' >{post.conteudo}</span>
          <DeleteAction action={useDeletePost(post.id)} />
        </div>
      )}
    </Container>
  );
}
