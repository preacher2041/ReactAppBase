import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';

import userAuth from '../../components/userAuthentication/userAuthenticationReducer';

const rootReducer = (history) =>
	combineReducers({
		router: connectRouter(history),
		userAuth
	});

export default rootReducer;
