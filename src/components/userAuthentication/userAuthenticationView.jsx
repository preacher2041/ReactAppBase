import React from 'react';
import { useSelector } from 'react-redux';

import Cta from '../Cta';
import Modal from '../Modal';
import {signInModalTitle, signInModalContent, signInModalActions} from '../SignIn';
import {signUpModalTitle, signUpModalContent, signUpModalActions} from '../SignUp';

import { selectIsModalOpen, selectModalName } from './UserAuthenticationSelectors';

const UserAuthenticationView = (props) => {
	const { onSignInClick, onSignUpClick, onModalClose } = props;
	const isModalOpen = useSelector(selectIsModalOpen);
	const modalName = useSelector(selectModalName);

	const displayModal = (modalName) => {
		switch(modalName) {
			case 'signIn':
				return (
					<Modal open={isModalOpen} onClose={onModalClose} modalTitle={signInModalTitle()} modalContent={signInModalContent()} modalActions={signInModalActions()} />
				);
			case 'signUp':
				return (
					<Modal open={isModalOpen} onClose={onModalClose} modalTitle={signUpModalTitle()} modalContent={signUpModalContent()} modalActions={signUpModalActions()} />
				);
			default:
				break;
		}
	}

	return (
		<>
			<Cta onClick={onSignUpClick} name={'signUp'} >Sign Up</Cta>
			<Cta onClick={onSignInClick} name={'signIn'} >Sign In</Cta>
			{displayModal(modalName)}
		</>
	);
};

export default UserAuthenticationView;
