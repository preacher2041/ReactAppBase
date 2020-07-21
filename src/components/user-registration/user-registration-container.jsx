import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import UserRegistrationViews from './user-registration-view';
import { userRegistration } from '../../services/actions/userAuthActions';

const UserRegistrationContainer = () => {
	const dispatch = useDispatch();
	const [userName, setUserName] = useState('');
	const [emailAddress, setEmailAddress] = useState('');
	const [password, setPassword] = useState('');

	const updateUserName = (event) => {
		const userName = event.target.value;
		setUserName(userName);
	};

	const updateEmailAddress = (event) => {
		const emailAddress = event.target.value;
		setEmailAddress(emailAddress);
	};

	const updatePassword = (event) => {
		const password = event.target.value;
		setPassword(password);
	};

	const registration = () => {
		dispatch(
			userRegistration.request({ userName, emailAddress, password })
		);
	};

	return (
		<UserRegistrationViews
			userRegistration={registration}
			updateUserName={updateUserName}
			updateEmailAddress={updateEmailAddress}
			updatePassword={updatePassword}
		/>
	);
};

export default UserRegistrationContainer;
