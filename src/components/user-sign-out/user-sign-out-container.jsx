import React from 'react';
import UserSignOutView from './user-sign-out-view';

const SignOutButtonContainer = ({history, signOut}) => {
	const userSignOut = () => {
		signOut(history);
	};

	return (
		<UserSignOutView
			userSignOut={userSignOut}
		/>
	);
};

export default SignOutButtonContainer;