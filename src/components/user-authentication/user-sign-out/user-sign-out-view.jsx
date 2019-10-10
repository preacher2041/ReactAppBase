import React from 'react';
import MenuItem from '@material-ui/core/MenuItem';

const UserSignOutView = ({userSignOut}) => (
	<MenuItem
		onClick={userSignOut}>
		Sign out
	</MenuItem>
);

export default UserSignOutView;