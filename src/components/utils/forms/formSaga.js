import { takeLatest } from 'redux-saga/effects';
import { get } from 'lodash';
import formActionTypes from './formTypes';
import { signInRegistrationFormConfig } from '../../signInRegistration';

function* validateFormField({ payload }) {
	const { field, value, form } = payload;
	const validationRules = get();
	console.log(field, value, form);
}

function* watchFormFieldUpdate() {
	yield takeLatest([formActionTypes.UPDATE_FORM_FIELD], validateFormField);
}

export default watchFormFieldUpdate;
