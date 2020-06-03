

const INITIAL_STATE = [];

export default (state=INITIAL_STATE, action) => {
  switch(action.type){

    case 'CRIACAO_POST': {
      const { post } = action.payload;
      return post;
    }

    case 'SUCESSO_READ': {
      const { posts } = action.payload;
      return posts;
    }

    case 'ALTERACAO_POSTS': {
      const { posts } = action.payload;
      return posts;
    }

    case 'SUCESSO': {
      const { posts } = action.payload;
      return posts;
    }

    default: 
      return state;
  }
}