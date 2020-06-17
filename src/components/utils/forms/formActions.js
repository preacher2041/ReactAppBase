import formActionTypes from './formTypes';

const createForm = (payload) => ({
	type: formActionTypes.CREATE_FORM,
	payload
});

const updateField = (payload) => ({
	type: formActionTypes.UPDATE_FORM_FIELD,
	payload
});

const resetForm = (payload) => ({
	type: formActionTypes.RESET_FORM,
	payload
});

const submitForm = (payload) => ({
	type: formActionTypes.SUBMIT_FORM,
	payload
});

export default {
	createForm,
	updateField,
	resetForm,
	submitForm
};
