import { createSelector } from 'reselect';

const getState = ({ userAuth }) => userAuth;

export const selectIsModalOpen = createSelector(
	getState,
	({ isModalOpen = false }) => isModalOpen || false
);
