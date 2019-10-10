export const actionTypes = {
	REGISTER_NEW_USER : 'REGISTER_NEW_USER',
	REGISTRATION_SUCCESS: 'REGISTRATION_SUCCESS',
	REGISTRATION_FAILED : 'REGISTRATION_FAILED',
	SIGN_IN_WITH_GOOGLE_SUBMITTED : 'SIGN_IN_WITH_GOOGLE_SUBMITTED',
	SIGN_IN_WITH_CREDENTIALS_SUBMITTED : 'SIGN_IN_WITH_CREDENTIALS_SUBMITTED',
	SIGN_IN_SUCCESS : 'SIGN_IN_SUCCESS',
	SIGN_IN_FAILED : 'SIGN_IN_FAILED',
	SET_PERSISTED_USER_STATUS: 'SET_PERSISTED_USER_STATUS',
	PERSIST_SIGNED_IN_USER: 'PERSIST_SIGNED_IN_USER',
	SIGN_OUT_SUBMITTED : 'SIGN_OUT_SUBMITTED',
	SIGN_OUT_SUCCESS : 'SIGN_OUT_SUCCESS',
	SIGN_OUT_FAILED : 'SIGN_OUT_FAILED',
	SIGN_OUT_USER: 'SIGN_OUT_USER',
	UPDATE_NAME_SUBMITTED: 'UPDATE_NAME_SUBMITTED',
	UPDATE_NAME_SUCCESS: 'UPDATE_NAME_SUCCESS',
	UPDATE_NAME_FAILED: 'UPDATE_NAME_FAILED',
};

export const registerNewUser = (email, password, history) => ({
	type: actionTypes.REGISTER_NEW_USER,
	email,
	password,
	history
});

export const regsitrationSuccess = (user) => ({
	type: actionTypes.REGISTRATION_SUCCESS,
	user
});

export const regsitrationError = (error) => ({
	type: actionTypes.REGISTRATION_FAILED,
	error
});

export const signInWithGoogleSubmitted = (history) => ({
	type: actionTypes.SIGN_IN_WITH_GOOGLE_SUBMITTED,
	history: history
});

export const signInWithCredentialsSubmitted = (email, password, history) => ({
	type: actionTypes.SIGN_IN_WITH_CREDENTIALS_SUBMITTED,
	email,
	password,
	history
});

export const signInSuccess = (result) => ({
	type: actionTypes.SIGN_IN_SUCCESS,
	result
});

export const signInFailed = (error) => ({
	type: actionTypes.SIGN_IN_FAILED,
	error
});


export const setPersistedUserStatus = (status, userObj) => ({
	type: actionTypes.SET_PERSISTED_USER_STATUS,
	status,
	userObj,
});

export const persistSignedInUser = (user) => ({
	type: actionTypes.PERSIST_SIGNED_IN_USER,
	user
});

export const signOutSubmitted = (history) => ({
	type: actionTypes.SIGN_OUT_SUBMITTED,
	history
});

export const signOutSuccess = (result) => ({
	type: actionTypes.SIGN_OUT_SUCCESS,
	result
});

export const signOutError = (error) => ({
	type: actionTypes.SIGN_OUT_FAILED,
	error
});

export const updateNameSubmitted = (name, history) => ({
	type: actionTypes.UPDATE_NAME_SUBMITTED,
	name,
	history
});

export const updateNameSuccess = () => ({
	type: actionTypes.UPDATE_NAME_SUCCESS
});

export const updateNameFailed = (error) => ({
	type: actionTypes.UPDATE_NAME_FAILED,
	error
});