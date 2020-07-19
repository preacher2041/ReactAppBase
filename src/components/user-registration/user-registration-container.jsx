import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import UserRegistrationViews from './user-registration-view';
import { userRegistration } from '../../services/actions/userAuthActions';

const UserRegistrationContainer = () => {
	const dispatch = useDispatch();
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');

	const updateEmail = (event) => {
		const email = event.target.value;
		setEmail(email);
	};

	const updatePassword = (event) => {
		const password = event.target.value;
		setPassword(password);
	};

	const registration = () => {
		dispatch(userRegistration.request({ email, password }));
	};

	return (
		<UserRegistrationViews
			userRegistration={registration}
			updateEmail={updateEmail}
			updatePassword={updatePassword}
		/>
	);
};

export default UserRegistrationContainer;
