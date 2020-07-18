import { fork, takeLatest, put } from 'redux-saga/effects';
import { REGISTER_USER } from '../actions';
import { registerUser } from '../actions/userAuthActions';

function* registerUserSaga() {
	try {
		const targetURL = '/api/auth/';
		const data = {
			emailAddress: 'lee.hitchcock2041@gmail.com',
			password: 'letmein1234!'
		};
		const response = yield fetch(targetURL, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify(data)
		});
		yield put(registerUser.success(response.data));
	} catch (e) {
		yield put(registerUser.fail(e));
	}
}

function* watchUserRegistration() {
	yield takeLatest(REGISTER_USER.REQUEST, registerUserSaga);
}

export default [fork(watchUserRegistration)];
