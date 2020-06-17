import { all, fork } from 'redux-saga/effects';
import formSaga from '../components/utils/forms';

export default function* rootSaga() {
	yield all([fork(formSaga)]);
}
