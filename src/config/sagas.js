import { all, fork } from 'redux-saga/effects';
import userAuthenticationSaga from '../components/user-authentication/store/sagas';

export default function* rootSaga () {
	yield all([
		fork(
			userAuthenticationSaga
		),
	]);
}