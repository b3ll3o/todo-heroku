import React, { useEffect } from 'react';

import { useSelector, useDispatch } from 'react-redux';
import * as PostActions from '../../store/actions/PostActions';

import Container from './styles';

import { ReactComponent as AddIcon } from '../../assets/icons/add.svg';

import Header from '../../shared/Header';
import FloatAction from '../../shared/FloatAction';

import Lista from './Lista';

export default () => {

  const dispatch = useDispatch();

  const { posts } = useSelector(state => state);

  useEffect(() => {

    const fetch = () => {
      dispatch(PostActions.read());
    }

    fetch();

  }, [dispatch]);

  return (
    <Container>
      <Header />
      <FloatAction redirect='/add' icon={<AddIcon />} />
      <Lista posts={posts}/>
    </Container>
  )
}