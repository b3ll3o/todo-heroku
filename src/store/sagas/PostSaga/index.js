import { put, takeLatest } from 'redux-saga/effects';

import * as PostActions from '../../actions/PostActions';

function* create(action){
  const { titulo, conteudo } = action.payload;
  console.log(titulo, conteudo);
  yield put(PostActions.sucessoCreate({titulo,conteudo}));
}

export default function* sagas(){
  yield takeLatest('CREATE_POST', create);
}
