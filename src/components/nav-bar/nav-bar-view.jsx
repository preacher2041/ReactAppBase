import React from 'react';
import { Link } from 'react-router-dom';
import UserMenu from '../user-menu';
import MainMenu from '../main-menu-drawer';
import {styles} from './nav-bar-styles';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

const navBarView = ({classes, userIsAuthenticated}) => (
	<div className={classes.root}>
		<AppBar color="primary" position="static" className={classes.appBar}>
			<Toolbar>
				{/* If user is signed in render menu button **/}
				{userIsAuthenticated ? (
					<MainMenu />
				) : (
					<div />
				)}
				<Link to="/" className={classes.grow}>
					<Typography className={classes.title} variant="h6">
						Authentication Framework
					</Typography>
				</Link>
				{/* If user is signed in show the user menu button else
						show sign in button**/}
				{userIsAuthenticated ? (
					<UserMenu />
				) : (
					<Button
						variant="contained"
						color="secondary"
						component={Link}
						to="/sign-in">
						Sign in
					</Button>
				)}
			</Toolbar>
		</AppBar>
	</div>
);

export default withStyles(styles)(navBarView);