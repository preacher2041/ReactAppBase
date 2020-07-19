import { fork, takeLatest, put } from 'redux-saga/effects';
import {
	USER_REGISTRATION,
	USER_SIGN_IN,
	USER_FETCH_PROFILE_DATA
} from '../actions';
import { userRegistration, userSignIn } from '../actions/userAuthActions';

function* userRegistrationSaga() {
	try {
		const targetURL = '/api/users/';
		const data = {
			userName: 'preacher2043',
			emailAddress: 'lee.hitchcock2043@gmail.com',
			password: 'letmein1234!'
		};
		const result = yield fetch(targetURL, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify(data)
		})
			.then((response) => response.text())
			.then((result) => result);
		yield put(userRegistration.success(result));
	} catch (e) {
		yield put(userRegistration.fail(e));
	}
}

function* userSignInSaga() {
	try {
		const targetURL = '/api/auth/';
		const data = {
			emailAddress: 'lee.hitchcock2041@gmail.com',
			password: 'letmein1234!'
		};
		const result = yield fetch(targetURL, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify(data)
		})
			.then((response) => response.text())
			.then((result) => result);

		yield put(userSignIn.success(result));
	} catch (e) {
		yield put(userSignIn.fail(e));
	}
}

function* fetchSignedInUserSaga() {
	console.log('fetch Profile Data');
}

function* watchUserSignIn() {
	yield takeLatest(USER_SIGN_IN.REQUEST, userSignInSaga);
}

function* watchUserRegistration() {
	yield takeLatest(USER_REGISTRATION.REQUEST, userRegistrationSaga);
}

function* watchUserFetchProfileData() {
	yield takeLatest(
		[USER_FETCH_PROFILE_DATA.REQUEST, USER_SIGN_IN.SUCCESS],
		fetchSignedInUserSaga
	);
}

export default [
	fork(watchUserRegistration),
	fork(watchUserSignIn),
	fork(watchUserFetchProfileData)
];
