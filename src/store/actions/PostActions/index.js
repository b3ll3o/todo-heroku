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

export const edit = post => ({
  type: tipos.EDIT, 
  payload: {
    ...post
  }
});

export const findById = id => ({
  type: tipos.FIND_BY_ID, 
  payload: {
    id
  }
});

export const fixadorPost = id => ({
  type: tipos.FIXADOR_POST,
  payload: {
    id
  }
});

export const sucesso = posts => ({
  type: tipos.SUCESSO, 
  payload: {
    posts
  }
});