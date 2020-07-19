import { USER_SIGN_IN, USER_FETCH_PROFILE_DATA } from '../actions';
const initialState = {};

export default (state = initialState, action) => {
	const { type, payload } = action;
	switch (type) {
		case USER_SIGN_IN.SUCCESS:
			return {
				...state,
				user: {
					token: payload
				}
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
				user: {
					...state.user,
					_id: _id,
					userName,
					emailAddress,
					isAdmin
				}
			};
		default:
			return state;
	}
};
