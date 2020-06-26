import { selectRegistrationFormData, selectSignInFormData } from './signInRegistrationSelector';

const REGISTRATION_FORM = 'registration-form';
const SIGN_IN_FORM = 'sign-in-form';

export const registrationFormConfig = {
	id: REGISTRATION_FORM,
	formFieldsSelector: selectRegistrationFormData,
	submitAction: null
};

export const signInFormConfig = {
	id: SIGN_IN_FORM,
	formFieldsSelector: selectSignInFormData,
	submitAction: null
};
