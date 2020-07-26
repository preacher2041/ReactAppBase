import { createSelector } from 'reselect';

const getState = ({ userAuth }) => userAuth;

export const selectIsProfileLoading = createSelector(
	getState,
	({ isProfileLoading = false }) => isProfileLoading || false
);
export const selectProfileData = createSelector(
	getState,
	({ profileData = {} }) => profileData
);

export const selectUserId = createSelector(
	selectProfileData,
	({ _id = '' }) => _id || ''
);

export const selectUserName = createSelector(
	selectProfileData,
	({ userName = '' }) => userName || ''
);

export const selectUserEmailAddress = createSelector(
	selectProfileData,
	({ emailAddress = '' }) => emailAddress || ''
);

export const selectUserIsAdmin = createSelector(
	selectProfileData,
	({ isAdmin = false }) => isAdmin || false
);

export const selectProfileErrorData = createSelector(
	getState,
	({ profileErrorData = {} }) => profileErrorData
);

export const selectIsError = createSelector(
	selectProfileErrorData,
	({ isError}) => isError || false
);

export const selectErrorMessage = createSelector(
	selectProfileErrorData,
	({errorMessage = ''}) => errorMessage || ''
);
