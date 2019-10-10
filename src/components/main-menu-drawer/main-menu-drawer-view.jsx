import React from 'react';
import {styles} from './main-menu-drawer-styles'
import { Drawer, Hidden, IconButton, withStyles } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';

const MainMenuDrawerView = ({classes, sideList, toggleDrawer, drawerPosition}) => (
	<div>
		<Hidden lgUp>
			<IconButton
				className={classes.menuButton}
				color="inherit"
				aria-label="Menu"
				onClick={toggleDrawer('left', true)}>
				<MenuIcon/>
			</IconButton>
			<Drawer open={drawerPosition} onClose={toggleDrawer('left', false)}>
				<div
					tabIndex={0}
					role="button"
					onClick={toggleDrawer('left', false)}
					onKeyDown={toggleDrawer('left', false)}
				>
					{sideList('left')}
				</div>
			</Drawer>
		</Hidden>

		<Hidden mdDown>
			<Drawer variant='permanent' open>
				{sideList('left')}
			</Drawer>
		</Hidden>
	</div>
);

export default withStyles(styles)(MainMenuDrawerView);