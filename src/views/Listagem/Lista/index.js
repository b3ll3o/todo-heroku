import React from 'react';

import Container from './styles';

export default ({ posts }) => {

  return (
    <Container>
      { posts && posts.map(post =>
        <div>
          <span className='titulo' >{post.titulo}</span>
          <span className='conteudo' >{post.conteudo}</span>
        </div>
      )}
    </Container>
  )
}