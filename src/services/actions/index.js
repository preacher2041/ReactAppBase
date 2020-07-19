import { createActionTypes } from '../../utils/actions';

// USER
export const USER_REGISTRATION = createActionTypes({ id: 'USER_REGISTRATION' });
export const USER_SIGN_IN = createActionTypes({ id: 'USER_SIGN_IN' });
export const USER_FETCH_PROFILE_DATA = createActionTypes({
	id: 'USER_FETCH_PROFILE_DATA'
});
