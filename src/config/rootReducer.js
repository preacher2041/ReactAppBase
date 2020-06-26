import { combineReducers } from 'redux';

import formsReducer from '../components/utils/forms';
import signInRegistrationFormReducer from '../components/signInRegistration';

export default combineReducers({
	form: formsReducer,
	signInRegistrationForm: signInRegistrationFormReducer
});
