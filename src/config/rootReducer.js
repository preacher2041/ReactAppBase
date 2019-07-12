import { combineReducers } from 'redux';

import userAuthenticatiomReducer from '../components/user-authentication/store/reducer';

export default combineReducers({
	userAuthentication: userAuthenticatiomReducer
});