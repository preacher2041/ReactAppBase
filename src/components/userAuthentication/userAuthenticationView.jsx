import React from 'react';
import { useSelector } from 'react-redux';

import Cta from '../cta';
import Modal from '../modal';

import { selectIsModalOpen } from './userAuthenticationSelectors';

const UserAuthenticationView = (props) => {
	const { onSignInClick, onSignUpClick, onModalClose } = props;
	const isModalOpen = useSelector(selectIsModalOpen);

	return (
		<>
			<Cta onClick={onSignUpClick}>Sign Up</Cta>
			<Cta onClick={onSignInClick}>Sign In</Cta>
			<Modal open={isModalOpen} onClose={onModalClose} />
		</>
	);
};

export default UserAuthenticationView;
