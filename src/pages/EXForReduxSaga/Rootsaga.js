import { call, all } from 'redux-saga/effects';
import { watchFetchMovies } from './moviesaga';

export default function* rootSaga() {
    yield call(watchFetchMovies);              
}