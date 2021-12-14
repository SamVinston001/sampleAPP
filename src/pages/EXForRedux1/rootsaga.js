import {takeLatest} from 'redux-saga/effects';
import { GET_USER } from './user';
import { handleGetUser } from './handler';

export function* watcherSaga () {
    yield takeLatest(GET_USER,handleGetUser);
} ;