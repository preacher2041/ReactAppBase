import { combineReducers } from 'redux';

import formsReducer from '../components/utils/forms';

export default combineReducers({
	forms: formsReducer
});
