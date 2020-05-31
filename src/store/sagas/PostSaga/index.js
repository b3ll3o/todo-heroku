import { put, takeLatest } from 'redux-saga/effects';

import { v4 as uuid } from 'uuid';

import LocalStorageService from './service';

import * as PostActions from '../../actions/PostActions';
import TiposPostsActions from '../../actions/PostActions/tipos';

const createNewPost = (titulo, conteudo) => ({
  id: uuid(), titulo, conteudo
})

function* create(action){
  const { titulo, conteudo } = action.payload;
  const posts = LocalStorageService.get();
  
  const newPosts = posts 
    ? [ ...posts, createNewPost(titulo, conteudo)]
    : [createNewPost(titulo, conteudo)];
  
  LocalStorageService.set(newPosts);
  yield put(PostActions.sucessoCreate(newPosts));
}

function* read(){
  yield put(PostActions.sucessoRead(LocalStorageService.get()));
}

function* deletePost(action){
  const { id } = action.payload;
  
  const posts = LocalStorageService.get();

  const newPosts = posts.filter(post => post.id !== id);
  LocalStorageService.set(newPosts);

  yield put(PostActions.alteracaoPosts(newPosts));
}

export default function* sagas(){
  yield takeLatest(TiposPostsActions.CREATE_POST, create);
  yield takeLatest(TiposPostsActions.READ, read);
  yield takeLatest(TiposPostsActions.DELETE, deletePost);
}
