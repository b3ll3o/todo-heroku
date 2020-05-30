import { put, takeLatest } from 'redux-saga/effects';

import LocalStorageService from './service';

import * as PostActions from '../../actions/PostActions';

function* create(action){
  const { titulo, conteudo } = action.payload;
  const posts = LocalStorageService.get();
  
  const newPosts = posts 
    ? [ ...posts, { titulo, conteudo }]
    : [{titulo, conteudo}];
  
  LocalStorageService.set(newPosts);
  yield put(PostActions.sucessoCreate(newPosts));
}

function* read(){
  yield put(PostActions.sucessoRead(LocalStorageService.get()));
}

export default function* sagas(){
  yield takeLatest('CREATE_POST', create);
  yield takeLatest('READ', read);
}
