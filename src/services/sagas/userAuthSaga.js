import { fork, takeLatest, put } from 'redux-saga/effects';
import {
	USER_REGISTRATION,
	USER_SIGN_IN,
	USER_FETCH_PROFILE_DATA
} from '../actions';
import {
	userRegistration,
	userSignIn,
	userFetchProfileData
} from '../actions/userAuthActions';

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
	try {
		const targetURL = '/api/users/me';
		const headerData =
			'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZWU2NDM4MzA5MmIxMzEwN2ZkNTFjMWIiLCJpc0FkbWluIjp0cnVlLCJpYXQiOjE1OTUxOTE5MjB9.cubKY_NvSTSpi_3ecOOcZ0RNXczFlGITu8I9wHBsmvE';
		const result = yield fetch(targetURL, {
			method: 'GET',
			headers: {
				'x-auth-token': headerData
			}
		})
			.then((response) => response.text())
			.then((result) => result);

		yield put(userFetchProfileData.success(result));
	} catch (e) {
		yield put(userFetchProfileData.fail(e));
	}
}

function* watchUserRegistration() {
	yield takeLatest(USER_REGISTRATION.REQUEST, userRegistrationSaga);
}

function* watchUserSignIn() {
	yield takeLatest(
		[USER_SIGN_IN.REQUEST, USER_REGISTRATION.SUCCESS],
		userSignInSaga
	);
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
