import { fork, takeLatest, put } from 'redux-saga/effects';
import { push } from 'connected-react-router';
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

function* userRegistrationSaga({ payload }) {
	const { userName = '', emailAddress = '', password = '' } = payload;
	try {
		const targetURL = '/api/users/';
		const data = {
			userName,
			emailAddress,
			password
		};
		const result = yield fetch(targetURL, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify(data)
		})
			.then(response => response.json())
			.then(result => result);
		yield put(userRegistration.success(result));
	} catch (e) {
		yield put(userRegistration.fail(e));
	}
}

function* userSignInSaga({ payload }) {
	const { emailAddress, password } = payload;
	try {
		const targetURL = '/api/auth/';
		const data = {
			emailAddress,
			password
		};
		const result = yield fetch(targetURL, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify(data)
		})
			.then(response => response.json())
			.then(result => result);
			const {token} = result;
			localStorage.setItem('token', token);
		yield put(userSignIn.success(result.token));
		yield put(push('/auth/home'));
	} catch (e) {
		yield put(userSignIn.fail(e));
	}
}

function* fetchSignedInUserSaga() {
	try {
		const targetURL = '/api/users/me';
		const headerData = localStorage.getItem('token');
		const result = yield fetch(targetURL, {
			method: 'GET',
			headers: {
				'x-auth-token': headerData
			}
		})
			.then(response => response.json())
			.then(result => result);

		const {profileData} = result;

		yield put(userFetchProfileData.success(profileData));
	} catch (e) {
		yield put(userFetchProfileData.fail(e));
	}
}

function* watchUserRegistration() {
	yield takeLatest(USER_REGISTRATION.REQUEST, userRegistrationSaga);
}

function* watchUserSignIn() {
	yield takeLatest([USER_SIGN_IN.REQUEST], userSignInSaga);
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
