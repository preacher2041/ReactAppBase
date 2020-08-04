import React from 'react';
import { useDispatch } from 'react-redux';

import UserAuthenticationView from './userAuthenticationView';

import { openModal, closeModal } from './userAuthenticationActions';

const UserAuthenticationContainer = () => {
	const dispatch = useDispatch();

	const onSignInClick = () => {
		dispatch(openModal());
	};

	const onSignUpClick = () => {
		dispatch(openModal());
	};

	const onModalClose = () => {
		dispatch(closeModal());
	};

	return (
		<>
			<UserAuthenticationView
				onSignInClick={onSignInClick}
				onSignUpClick={onSignUpClick}
				onModalClose={onModalClose}
			/>
		</>
	);
};

export default UserAuthenticationContainer;
