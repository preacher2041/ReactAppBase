import React, {useState} from 'react';
import UserSignInView from './user-sign-in-view';

const UserSignInContainer = ({history, signInWithCredentials, signInWithGoogle, isSubmitting}) => {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');

	const updateEmail = event => {
		setEmail(event.target.value)
	};

	const updatePassword = event => {
		setPassword(event.target.value);
	};

	const userSignInWithCredentials = () => {
		signInWithCredentials(email, password, history);
	};

	const userSignInWithGoogle = () => {
		signInWithGoogle(history);
	};

	return (
		<UserSignInView
			isSubmitting={isSubmitting}
			updateEmail={updateEmail}
			updatePassword={updatePassword}
			userSignInWithCredentials={userSignInWithCredentials}
			userSignInWithGoogle={userSignInWithGoogle}
		/>
	);
};

export default UserSignInContainer;
