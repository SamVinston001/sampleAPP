import { FETCH_MOVIES, FETCH_SUCCEEDED, FETCH_FAILED } from './Actiontypes';
//Saga effects
import { call,put, takeLatest } from 'redux-saga/effects';
import Apii from './Api';

function* fetchMovies() {
    try {
        const receivedMovies = yield call(Apii);   
        yield put({ type: FETCH_SUCCEEDED, receivedMovies: receivedMovies });   
        console.log('tessssdghh',Apii)  
    } catch (error) {        
        yield put({ type: FETCH_FAILED, error });
    }
}
export function* watchFetchMovies() {
    yield takeLatest(FETCH_MOVIES, fetchMovies);
}