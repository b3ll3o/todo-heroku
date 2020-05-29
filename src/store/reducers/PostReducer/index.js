

const INITIAL_STATE = [];

export default (state=INITIAL_STATE, action) => {
  switch(action.type){

    case 'CRIACAO_POST': {
      const { post } = action.payload;
      return post;
    }

    case 'ALTERACAO_POST': {
      const { posts } = action.payload;
      return posts;
    }

    default: 
      return state;
  }
}