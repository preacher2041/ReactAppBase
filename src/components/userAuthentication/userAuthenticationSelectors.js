import { createSelector } from 'reselect';

const getState = ({ userAuth }) => userAuth;

export const selectModalData = createSelector(
	getState,
	({ modal = {} }) => modal || {}
);

export const selectIsModalOpen = createSelector(
	selectModalData,
	({isModalOpen = false }) => isModalOpen || false
);

export const selectModalName = createSelector(
	selectModalData,
	({modalName = '' }) => modalName || ''
);