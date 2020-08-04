import { OPEN_MODAL, CLOSE_MODAL } from './userAuthenticationTypes';

const initialState = {
	isModalOpen: false
};

export default (state = initialState, action) => {
	const { type, payload } = action;
	switch (type) {
		case OPEN_MODAL:
			return {
				...state,
				isModalOpen: true
			};
		case CLOSE_MODAL:
			return {
				...state,
				isModalOpen: initialState.isModalOpen
			};
		default:
			return state;
	}
};
