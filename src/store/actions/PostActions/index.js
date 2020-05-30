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