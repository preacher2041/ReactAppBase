import React, {useState} from 'react';
import {withRouter} from 'react-router-dom';
import PropTypes from 'prop-types';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import UserMenuView from './user-menu-view';

const UserMenu = () => {
	const [anchorEl, setAnchorEl] = useState(null);

	const handleClick = event => {
		/*  Sets the currentTarget of the click event in the local
		application state as 'anchorEl' **/
		setAnchorEl(event.currentTarget);
	};

	const handleClickAway = () => {
		setAnchorEl(null);
	};

	const handleClose = () => {
		/* Sets 'anchorEl' in current state to null  **/
		setAnchorEl(null);
	};

	return (
		<ClickAwayListener onClickAway={handleClickAway}>
			<div>
				<UserMenuView
					anchorEl={anchorEl}
					handleClick={handleClick}
					hancleClose={handleClose}
				/>
			</div>
		</ClickAwayListener>
	);
};

UserMenu.propTypes = {
	classes: PropTypes.object
};

export default withRouter(UserMenu);