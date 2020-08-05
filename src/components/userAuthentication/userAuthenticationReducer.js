import { OPEN_MODAL, CLOSE_MODAL } from './UserAuthenticationTypes';

const initialState = {
	isModalOpen: false
};

export default (state = initialState, action) => {
	const { type } = action;
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
