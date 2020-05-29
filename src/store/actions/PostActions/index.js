
export const add = post => ({
  type: 'ADD_POST', 
  payload: {
    ...post
  }
});