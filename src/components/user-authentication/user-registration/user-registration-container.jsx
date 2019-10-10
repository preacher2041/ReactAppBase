import React, {useState} from 'react';
import UserRegistrationViews from './user-registration-view';

const UserRegistrationContainer = ({history, register, signInWithGoogle}) => {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');

	const updateEmail = event => {
		const email = event.target.value;
		setEmail(email);
	};

	const updatePassword = event => {
		const password = event.target.value;
		setPassword(password);
	};

	const userRegistration = () => {
		register(email, password, history);
	};

	const userSignInWithGoogle = () => {
		signInWithGoogle(history);
	};

	return (
		<UserRegistrationViews
			userRegistration={userRegistration}
			updateEmail={updateEmail}
			updatePassword={updatePassword}
			userSignInWithGoogle={userSignInWithGoogle}
		/>
	)
};

export default UserRegistrationContainer;