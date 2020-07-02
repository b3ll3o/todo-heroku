import { useEffect } from 'react';

import { useHistory } from 'react-router-dom';

import { useDispatch, useSelector } from 'react-redux';
import * as PostActions from '../store/actions/PostActions';

export const useRedirect = path => {

  const history = useHistory();

  const redirect = () => {
    if(path !== '')
      history.push(path);
  }
  
  return redirect;
}

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

export const useAdicionaPost = (titulo, conteudo, fixado) => {

  const dispatch = useDispatch();

  const adicionaPost = e => {
    e.preventDefault();
    dispatch(PostActions.create({ titulo, conteudo, fixado }));
  }

  return adicionaPost;
}

export const useEditPost = (id, tituloEditado, conteudoEditado, fixadoEditado, redirectPath='') => {

  useGetPosts();
  
  const dispatch = useDispatch();
  const redirect = useRedirect(redirectPath);

  const isCarregado = posts => (
    posts.length > 0
  );

  const { titulo, conteudo, fixado } = useSelector(state => isCarregado(state.posts)
    ? state.posts.filter(post => post.id === id)[0]
    : { titulo: '', conteudo: '', fixado: false });

  const setDefault = valor => novoValor => (
    novoValor === '' || novoValor === undefined || novoValor === null
      ? valor
      : novoValor
  );

  const setObjetoJson = chaves => valores => (
    Object.fromEntries(chaves.map((_, i) => [chaves[i], valores[i]]))
  )

  const setTitulo = setDefault(titulo);
  const setConteudo = setDefault(conteudo);
  const setFixado = setDefault(fixado);

  const setEditado = setObjetoJson(['id', 'titulo', 'conteudo', 'fixado']);

  const editPost = e => {
    e.preventDefault(); 

    dispatch(PostActions.edit(
      setEditado([
        id, 
        setTitulo(tituloEditado), 
        setConteudo(conteudoEditado), 
        setFixado(fixadoEditado)])
    ));

    redirect();
  }

  return [titulo, conteudo, fixado, editPost];
}

export const useFixadorPost = id => {

  const dispatch = useDispatch();

  const fixaPost = () => {
    dispatch(PostActions.fixadorPost(id));
  }

  return fixaPost;
}