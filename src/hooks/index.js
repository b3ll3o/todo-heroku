import { useEffect } from 'react';

import { useDispatch } from 'react-redux';
import * as PostActions from '../store/actions/PostActions';

export const useGetPosts = () => {

  const dispatch = useDispatch();

  useEffect(() => {

    const fetch = () => {
      dispatch(PostActions.read());
    }

    fetch();

  }, [dispatch]);
}

export const useDeletePost = id => {

  const dispatch = useDispatch();

  const deletePost = () => {
    dispatch(PostActions.deletePost(id));
  }

  return deletePost;
}

export const useAdicionaPost = (titulo, conteudo) => {

  const dispatch = useDispatch();

  const adicionaPost = e => {
    e.preventDefault();
    dispatch(PostActions.create({ titulo, conteudo }));
  }

  return adicionaPost;
}

export const useEditPost = id => {

}