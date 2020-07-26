import { USER_SIGN_IN, USER_FETCH_PROFILE_DATA } from '../actions';
const initialState = {
	profileData: {},
	isProfileLoading: false,
	profileErrorData: {
		isError: false,
		errorMessage: ''
	}
};

export default (state = initialState, action) => {
	const { type, payload } = action;
	switch (type) {
		case (USER_FETCH_PROFILE_DATA.REQUEST, USER_SIGN_IN.SUCCESS):
			return {
				...initialState,
				isProfileLoading: true,
				profileErrorData: initialState.profileError
			};
		case USER_SIGN_IN.FAIL: {
			const { data = {} } = payload;
			const { error = ''} = data;
			return {
				...state,
				profileErrorData: {
					isError: true,
					errorMessage: error
				}
			};
		}
		case USER_FETCH_PROFILE_DATA.SUCCESS: 
			return {
				...state,
				isProfileLoading: false,
				profileData: payload,
				profileErrorData: initialState.profileError
			};
		case USER_FETCH_PROFILE_DATA.FAIL: 
			const { data = {} } = payload;
			const { error = ''} = data;
			return {
				...state,
				profileErrorData: {
					isError: true,
					errorMessage: error
				}
			};
		default:
			return state;
	}
};
