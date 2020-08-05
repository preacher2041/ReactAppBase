import { OPEN_AUTHENTICATION_MODAL, CLOSE_AUTHENTICATION_MODAL } from './UserAuthenticationTypes';

const initialState = {
	modal: {
		isModalOpen: false,
		modalName: ''
	}
};

export default (state = initialState, action) => {
	const { type, payload } = action;
	switch (type) {
		case OPEN_AUTHENTICATION_MODAL:
			return {
				...state,
				modal: {
					isModalOpen: true,
					modalName: payload,
				}
			};
		case CLOSE_AUTHENTICATION_MODAL:
			return {
				...state,
				modal: initialState.modal
			};
		default:
			return state;
	}
};
