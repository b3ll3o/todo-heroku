import { useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';
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

export const useEditPost = (id, tituloEditado, conteudoEditado) => {

  useGetPosts();
  
  const dispatch = useDispatch();

  const isCarregado = posts => (
    posts.length > 0
  );

  const { titulo, conteudo } = useSelector(state => isCarregado(state.posts)
    ? state.posts.filter(post => post.id === id)[0]
    : { titulo: '', conteudo: '' });

  const editPost = e => {
    e.preventDefault();
    dispatch(PostActions.edit({ id, titulo: tituloEditado, conteudo: conteudoEditado }));
  }

  return [titulo, conteudo, editPost];
}

export const useFixadorPost = id => {

  const dispatch = useDispatch();

  const fixaPost = () => {
    dispatch(PostActions.fixadorPost(id));
  }

  return fixaPost;
}