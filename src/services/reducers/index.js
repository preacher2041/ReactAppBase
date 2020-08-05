import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';

import userAuth from '../../components/UserAuthentication/UserAuthenticationReducer';

const rootReducer = (history) =>
	combineReducers({
		router: connectRouter(history),
		userAuth
	});

export default rootReducer;
