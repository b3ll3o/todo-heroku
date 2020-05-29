import { all } from 'redux-saga/effects';

import PostSaga from './PostSaga';

export default function* sagas() {
  yield all([
    PostSaga(),
  ]);
}