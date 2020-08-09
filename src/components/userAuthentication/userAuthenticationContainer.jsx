import React from 'react';
import { useDispatch } from 'react-redux';

import UserAuthenticationView from './UserAuthenticationView';

import {
	openAuthenticationModal,
	closeAuthenticationModal
} from './UserAuthenticationActions';

const UserAuthenticationContainer = () => {
	const dispatch = useDispatch();

	const onSignInClick = (event) => {
		const target = event.currentTarget;
		const name = target.name;

		onModalOpen(name);
	};

	const onSignUpClick = (event) => {
		const target = event.currentTarget;
		const name = target.name;

		onModalOpen(name);
	};

	const onModalOpen = (name) => {
		dispatch(openAuthenticationModal(name));
	};

	const onModalClose = () => {
		dispatch(closeAuthenticationModal());
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
