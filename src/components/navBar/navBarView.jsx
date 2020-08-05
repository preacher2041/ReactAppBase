import React from 'react';
import { Link } from 'react-router-dom';
import { AppBar, Toolbar, Typography } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';

import UserAuthentication from '../UserAuthentication';

import { styles } from './NavBarStyles';

const NavBarView = ({ classes }) => (
	<div className={classes.root}>
		<AppBar elevation={0} position="static" className={classes.appBar}>
			<Toolbar>
				<Link to="/" className={classes.grow}>
					<Typography className={classes.title} variant="h6">
						Myth Maker
					</Typography>
				</Link>
				<UserAuthentication />
			</Toolbar>
		</AppBar>
	</div>
);

export default withStyles(styles)(NavBarView);
