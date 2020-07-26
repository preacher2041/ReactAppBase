import { USER_SIGN_IN, USER_FETCH_PROFILE_DATA } from '../actions';
const initialState = {
	profileData: {},
	isProfileLoading: false
};

export default (state = initialState, action) => {
	const { type, payload } = action;
	switch (type) {
		case (USER_FETCH_PROFILE_DATA.REQUEST, USER_SIGN_IN.SUCCESS):
			return {
				...initialState,
				isProfileLoading: true
			};
		case USER_SIGN_IN.FAIL: {
			const { data = {} } = payload;
			return {
				...state,
				profileData: {
					...state.profileData,
					error: data
				}
			};
		}
		case USER_FETCH_PROFILE_DATA.SUCCESS:
			return {
				...state,
				isProfileLoading: false,
				profileData: payload
			};
		case USER_FETCH_PROFILE_DATA.FAIL: {
			const { data = {} } = payload;
			return {
				...state,
				profileData: {
					...state.profileData,
					error: data
				}
			};
		}
		default:
			return state;
	}
};
