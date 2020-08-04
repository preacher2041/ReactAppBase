import React from 'react';
import { Link } from 'react-router-dom';
import {AppBar, Toolbar, Typography} from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';

import Cta from '../cta';

import {styles} from './navBarStyles';

const navBarView = ({classes}) => (
	<div className={classes.root}>
		<AppBar elevation={0} position="static" className={classes.appBar}>
			<Toolbar>
				<Link to="/" className={classes.grow}>
					<Typography className={classes.title} variant="h6">
						Myth Maker
					</Typography>
				</Link>
				<Cta>Sign Up</Cta>
				<Cta>Sign In</Cta>
			</Toolbar>
		</AppBar>
	</div>
);

export default withStyles(styles)(navBarView);