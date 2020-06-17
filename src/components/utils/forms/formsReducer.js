import actionTypes from './formTypes';

const initialState = {};
const formsReducer = (state = initialState, action) => {
	const { type, payload = {} } = action;

	switch (type) {
		case actionTypes.CREATE_FORM: {
			console.log('create form', payload);
			return state;
		}
		case actionTypes.UPDATE_FORM_FIELD: {
			console.log('update form', payload);
			return state;
		}
		case actionTypes.RESET_FORM: {
			console.log('reset form', payload);
			return state;
		}
		case actionTypes.SUBMIT_FORM: {
			console.log('submit form', payload);
			return state;
		}
		default:
			return state;
	}
};

export default formsReducer;
