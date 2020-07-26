import { fork, takeLatest, put } from 'redux-saga/effects';
import { push } from 'connected-react-router';
import axios from 'axios';
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
		const response = yield axios(targetURL, {
			method: 'post',
			data
		});
		yield put(userRegistration.success(response.data.profileData));
		return yield (response) => response.data;
	} catch (e) {
		yield put(userRegistration.fail(e.response));
	}
}

function* userSignInSaga({ payload }) {
	const { emailAddress = '', password = '' } = payload;
	try {
		const targetURL = '/api/auth/';
		const data = {
			emailAddress,
			password
		};
		const response = yield axios(targetURL, {
			method: 'post',
			data
		});
		yield put(userSignIn.success(response.data));
		return yield (response) => response.data;
	} catch (e) {
		yield put(userSignIn.fail(e.response));
	}
}

function* setUserToken({ payload }) {
	const { token = '' } = payload;
	localStorage.setItem('token', token);
	yield put(push('/auth/home'));
}

function* fetchSignedInUserSaga() {
	try {
		const targetURL = '/api/users/me';
		const headerData = localStorage.getItem('token');
		const response = yield axios(targetURL, {
			method: 'get',
			headers: {
				'x-auth-token': headerData
			}
		});
		yield put(userFetchProfileData.success(response.data.profileData));
		return yield (response) => response;
	} catch (e) {
		yield put(userFetchProfileData.fail(e.response));
	}
}

function* watchUserRegistration() {
	yield takeLatest(USER_REGISTRATION.REQUEST, userRegistrationSaga);
}

function* watchUserSignIn() {
	yield takeLatest([USER_SIGN_IN.REQUEST], userSignInSaga);
}

function* watchSetUserToken() {
	yield takeLatest(USER_SIGN_IN.SUCCESS, setUserToken);
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
	fork(watchSetUserToken),
	fork(watchUserFetchProfileData)
];
