
const KEY = 'posts';

export default {

  get: () => ( 
    JSON.parse(localStorage.getItem(KEY))
  ), 

  set: posts => {
    localStorage.setItem(KEY, JSON.stringify(posts));
  }
}