import { selectRegistrationFormData, selectSignInFormData } from './signInRegistrationSelector';
import { validateLength } from '../utils/validation';

const REGISTRATION_FORM = 'registration-form';
const SIGN_IN_FORM = 'sign-in-form';

const registrationFormValidationRules = [
	{
		validate: validateLength,
		validationProps: { min: 3, max: 50 },
		invalidMessage: `Email must be between 3 and 50 characters in length`
	}
];

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
