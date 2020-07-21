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
		case USER_FETCH_PROFILE_DATA.SUCCESS:
			const {
				_id = '',
				userName = '',
				emailAddress = '',
				isAdmin = ''
			} = JSON.parse(payload);
			return {
				...state,
				isProfileLoading: false,
				profileData: {
					...state.user,
					_id,
					userName,
					emailAddress,
					isAdmin
				}
			};
		default:
			return state;
	}
};
