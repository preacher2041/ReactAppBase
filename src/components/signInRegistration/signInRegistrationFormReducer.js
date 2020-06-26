const initialState = {
	registrationFormData: {
		registrationEmail: '',
		registrationPassword: ''
	},
	signInFormData: {
		signInEmail: '',
		signInPassword: ''
	}
};

const signInRegistrationFormReducer = (state = initialState, action = {}) => {
	return {
		...state
	};
};

export default signInRegistrationFormReducer;
