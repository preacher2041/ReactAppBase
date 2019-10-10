import React from 'react';
import SignOutButton from '../user-authentication/user-sign-out';
import {styles} from './user-menu-styles';
import {withStyles} from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import AccountCircle from '@material-ui/icons/AccountCircle';
import Menu from '@material-ui/core/Menu';
import { NavLink } from 'react-router-dom';
import MenuItem from '@material-ui/core/MenuItem';
import { Hidden } from '@material-ui/core';

const UserMenuView = ({classes, anchorEl, handleClick, handleClose}) => (
	<div>
		<Hidden xlUp>
			<IconButton
				color='inherit'
				onClick={handleClick}
			>
				<AccountCircle />
			</IconButton>
			<Menu
				id="simple-menu"
				anchorEl={anchorEl}
				open={Boolean(anchorEl)}
				onClose={handleClose}
			>
				<NavLink to='/auth/my-profile' className={classes.navLink}>
					<MenuItem>Profile</MenuItem>
				</NavLink>
				<SignOutButton/>
			</Menu>
		</Hidden>
	</div>
);

export default withStyles(styles)(UserMenuView);