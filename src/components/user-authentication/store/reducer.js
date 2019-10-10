import { actionTypes } from './actions';

const initialState = {
	userIsAuthenticated: 'pending'
};

const userAuthenticationReducer = (state = initialState, action) => {
	switch (action.type) {
		case actionTypes.SIGN_IN_WITH_GOOGLE_SUBMITTED:
			return {
				...state,
				isSubmitting: true,
				userIsAuthenticated: 'pending'
			};

		case actionTypes.SIGN_IN_WITH_CREDENTIALS_SUBMITTED:
			return {
				...state,
				isSubmitting: true,
				userIsAuthenticated: 'pending'
			};

		case actionTypes.SIGN_IN_SUCCESS:
			const user = action.result.user;
			return {
				...state,
				isSubmitting: false,
				userIsAuthenticated: true,
				userObj: user,
				signInError: false,
			};

		case actionTypes.SIGN_IN_FAILED:
			const signInError = action.error.message;
			return {
				...state,
				isSubmitting: false,
				signInError: signInError,
				userIsAuthenticated: false
			};

		case actionTypes.SET_PERSISTED_USER_STATUS:
			console.log('Action: ', action.status);
			console.log('User Obj: ', action.userObj);
			return {
				...state,
				userObj: action.userObj,
				userIsAuthenticated: action.status
			};

		case actionTypes.SIGN_OUT_SUBMITTED:
			return {
				...state
			};

		case actionTypes.SIGN_OUT_SUCCESS:
			return {
				...state,
				userIsAuthenticated: false,
				userObj: {},
				signOutError: false,
			};

		case actionTypes.SIGN_OUT_FAILED:
			const signOutError = action.error.message;
			return {
				...state,
				signOutError: signOutError
			};

		default:
			return state;
	}
};

export default userAuthenticationReducer;
