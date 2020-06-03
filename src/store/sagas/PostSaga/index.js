import { put, takeLatest } from 'redux-saga/effects';

import { v4 as uuid } from 'uuid';

import LocalStorageService from './service';

import * as PostActions from '../../actions/PostActions';
import TiposPostsActions from '../../actions/PostActions/tipos';

const createNewPost = (titulo, conteudo, fixado) => ({
  id: uuid(), titulo, conteudo, fixado
});

const ordenaPosts = posts => (
  posts.sort((a, b) => !a.fixado && b.fixado ? 1 : -1)
)

function* create(action){
  const { titulo, conteudo, fixado } = action.payload;
  const posts = LocalStorageService.get();
  
  const newPosts = posts 
    ? [ ...posts, createNewPost(titulo, conteudo, fixado)]
    : [createNewPost(titulo, conteudo, fixado)];
  
  LocalStorageService.set(newPosts);
  yield put(PostActions.sucessoCreate(newPosts));
}

function* read(){

  const posts = LocalStorageService.get();

  const postsOrdenados = ordenaPosts(posts);
  yield put(PostActions.sucesso(postsOrdenados));
}

function* deletePost(action){
  const { id } = action.payload;
  
  const posts = LocalStorageService.get();

  const newPosts = posts.filter(post => post.id !== id);
  LocalStorageService.set(newPosts);

  yield put(PostActions.alteracaoPosts(newPosts));
}

function* edit(action) {
  const { id, titulo, conteudo } = action.payload;

  const posts = LocalStorageService.get();

  const postsEditados = posts.map(post => post.id === id
    ? { id, titulo, conteudo, fixado: post.fixado }
    : post);

  LocalStorageService.set(postsEditados);

  yield put(PostActions.alteracaoPosts(postsEditados));
}

function* findById(action){
  const { id } = action.payload;

  const posts = LocalStorageService.get();

  const post = posts.filter(post => post.id === id)[0];

  yield put(PostActions.sucessoRead(post));
}

const fixaPost = post => {
  post.fixado = true;
  return post;
}

const desfixaPost = post => {
  post.fixado = false;
  return post;
}

function* fixadorPost(action){

  const { id } = action.payload;
  const posts = LocalStorageService.get();
  const fixadorPost = posts.map(post => post.id === id
    ? post.fixado
      ? desfixaPost(post)
      : fixaPost(post)
    : post);

  LocalStorageService.set(fixadorPost);

  yield put(PostActions.sucesso(ordenaPosts(fixadorPost)));
}

export default function* sagas(){
  yield takeLatest(TiposPostsActions.CREATE_POST, create);
  yield takeLatest(TiposPostsActions.READ, read);
  yield takeLatest(TiposPostsActions.DELETE, deletePost);
  yield takeLatest(TiposPostsActions.EDIT, edit);
  yield takeLatest(TiposPostsActions.FIND_BY_ID, findById);
  yield takeLatest(TiposPostsActions.FIXADOR_POST, fixadorPost);
}
