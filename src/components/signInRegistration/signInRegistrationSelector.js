import { createSelector } from 'reselect';

const getState = ({ signInRegistrationForm }) => signInRegistrationForm;

export const selectRegistrationFormData = createSelector(
	getState,
	({ registrationFormData = {} }) => registrationFormData
);

export const selectRegistrationEmail = createSelector(
	selectRegistrationFormData,
	({ registrationEmail }) => registrationEmail || ''
);

export const selectRegistrationPassword = createSelector(
	selectRegistrationFormData,
	({ registrationPassword }) => registrationPassword || ''
);

export const selectSignInFormData = createSelector(getState, ({ signInFormData = {} }) => signInFormData);

export const selectSignInEmail = createSelector(selectSignInFormData, ({ signInEmail }) => signInEmail || '');

export const selectSignInPassword = createSelector(selectSignInFormData, ({ signInPassword }) => signInPassword || '');
