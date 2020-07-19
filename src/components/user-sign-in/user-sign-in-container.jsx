import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import UserSignInView from './user-sign-in-view';
import { userSignIn } from '../../services/actions/userAuthActions';

const UserSignInContainer = () => {
	const dispatch = useDispatch();
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');

	const updateEmail = (event) => {
		setEmail(event.target.value);
	};

	const updatePassword = (event) => {
		setPassword(event.target.value);
	};

	const signIn = () => {
		dispatch(userSignIn.request({ email, password }));
	};

	return (
		<UserSignInView
			updateEmail={updateEmail}
			updatePassword={updatePassword}
			userSignIn={signIn}
		/>
	);
};

export default UserSignInContainer;
