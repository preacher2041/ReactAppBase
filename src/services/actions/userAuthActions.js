import {
	USER_REGISTRATION,
	USER_SIGN_IN,
	USER_FETCH_PROFILE_DATA
} from './index';
import { createActions } from '../../utils/actions';

export const userRegistration = createActions(USER_REGISTRATION);
export const userSignIn = createActions(USER_SIGN_IN);
export const userFetchProfileData = createActions(USER_FETCH_PROFILE_DATA);
