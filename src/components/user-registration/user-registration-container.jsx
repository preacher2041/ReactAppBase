import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import UserRegistrationViews from './user-registration-view';
import { registerUser } from '../../services/actions/userAuthActions';

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

	const userRegistration = () => {
		dispatch(registerUser.request({ email, password }));
	};

	return (
		<UserRegistrationViews
			userRegistration={userRegistration}
			updateEmail={updateEmail}
			updatePassword={updatePassword}
		/>
	);
};

export default UserRegistrationContainer;
