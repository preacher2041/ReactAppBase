import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import UserSignInView from './user-sign-in-view';
import { userSignIn } from '../../services/actions/userAuthActions';

const UserSignInContainer = () => {
	const dispatch = useDispatch();
	const [emailAddress, setEmailAddress] = useState('');
	const [password, setPassword] = useState('');

	const updateEmailAddress = (event) => {
		setEmailAddress(event.target.value);
	};

	const updatePassword = (event) => {
		setPassword(event.target.value);
	};

	const signIn = () => {
		dispatch(userSignIn.request({ emailAddress, password }));
	};

	return (
		<UserSignInView
			updateEmailAddress={updateEmailAddress}
			updatePassword={updatePassword}
			userSignIn={signIn}
		/>
	);
};

export default UserSignInContainer;
