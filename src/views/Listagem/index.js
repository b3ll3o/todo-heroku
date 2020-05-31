import React from 'react';

import { useSelector } from 'react-redux';

import { useGetPosts } from '../../hooks';

import Container from './styles';

import { ReactComponent as AddIcon } from '../../assets/icons/add.svg';

import Header from '../../shared/Header';
import FloatAction from '../../shared/FloatAction';

import Lista from './Lista';

export default () => {

  const { posts } = useSelector(state => state);

  useGetPosts();

  return (
    <Container>
      <Header />
      <FloatAction redirect='/add' icon={<AddIcon />} />
      <Lista posts={posts} />
    </Container>
  )
}