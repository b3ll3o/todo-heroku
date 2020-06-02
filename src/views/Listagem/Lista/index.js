import React from 'react';

import Container from './styles';

import Post from './Post';

export default ({ posts }) => (
  <Container>
    { posts && posts.map(post => <Post {...post} />) }
  </Container>
);

