import { createActionType } from '../../utils/actions';
import { ACTION_API } from '../constants/actions';

// USER
export const USER_REGISTRATION = createActionType({
	id: 'USER_REGISTRATION',
	type: ACTION_API
});
export const USER_SIGN_IN = createActionType({
	id: 'USER_SIGN_IN',
	type: ACTION_API
});
export const USER_FETCH_PROFILE_DATA = createActionType({
	id: 'USER_FETCH_PROFILE_DATA',
	type: ACTION_API
});
