import tipos from './tipos';

export const create = post => ({
  type: tipos.CREATE_POST, 
  payload: {
    ...post
  }
});

export const sucessoCreate = post => ({
  type: tipos.SUCESSO_CREATE_POST, 
  payload: {
    ...post
  }
});

export const read = () => ({
  type: tipos.READ
});

export const sucessoRead = posts => ({
  type: tipos.SUCESSO_READ, 
  payload: {
    posts
  }
});

export const deletePost = id => ({
  type: tipos.DELETE, 
  payload: {
    id
  }
});

export const sucessoDeletePost = posts => ({
  type: tipos.SUCESSO_DELETE, 
  payload: {
    posts
  }
});

export const alteracaoPosts = posts => ({
  type: tipos.ALTERACAO_POSTS, 
  payload: {
    posts
  }
});