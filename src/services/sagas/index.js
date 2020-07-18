import { all } from 'redux-saga/effects';
import userAuthSaga from './userAuthSaga';

export default function* rootSaga() {
	yield all([...userAuthSaga]);
}
