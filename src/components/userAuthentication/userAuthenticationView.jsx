import React from 'react';
import { useSelector } from 'react-redux';

import Cta from '../Cta';
import Modal from '../Modal';
import {
	SignInModalTitle,
	SignInModalContent,
	SignInModalActions
} from '../SignIn';
import {
	SignUpModalTitle,
	SignUpModalContent,
	SignUpModalActions
} from '../SignUp';

import {
	selectIsModalOpen,
	selectModalName
} from './UserAuthenticationSelectors';

const UserAuthenticationView = (props) => {
	const { onSignInClick, onSignUpClick, onModalClose } = props;
	const isModalOpen = useSelector(selectIsModalOpen);
	const modalName = useSelector(selectModalName);

	const displayModal = (modalName) => {
		switch (modalName) {
			case 'signIn':
				return (
					<Modal
						open={isModalOpen}
						onClose={onModalClose}
						modalTitle={<SignInModalTitle onClose={onModalClose} />}
						modalContent={<SignInModalContent />}
						modalActions={<SignInModalActions />}
					/>
				);
			case 'signUp':
				return (
					<Modal
						open={isModalOpen}
						onClose={onModalClose}
						modalTitle={<SignUpModalTitle onClose={onModalClose} />}
						modalContent={<SignUpModalContent />}
						modalActions={<SignUpModalActions />}
					/>
				);
			default:
				break;
		}
	};

	return (
		<>
			<Cta onClick={onSignUpClick} name={'signUp'}>
				Sign Up
			</Cta>
			<Cta onClick={onSignInClick} name={'signIn'}>
				Sign In
			</Cta>
			{displayModal(modalName)}
		</>
	);
};

export default UserAuthenticationView;
