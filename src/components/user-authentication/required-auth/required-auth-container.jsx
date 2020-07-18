import React from 'react';
import { Redirect } from 'react-router-dom';
import RequiredAuthRoutes from '../../../routes/required-auth';
import { auth } from '../../../services/config/firebase';
import CircularProgress from '@material-ui/core/CircularProgress';
import { Grid, withStyles } from '@material-ui/core';
import NavBar from '../../nav-bar';
import PersistentUserMenu from '../../persistent-user-menu';
import { styles } from './required-auth-styles';

const RequiredAuthContainer = ({
	path,
	classes,
	setPersistedUserStatus,
	userIsAuthenticated
}) => {
	const checkForPersistedUser = () => {
		auth.onAuthStateChanged((user) => {
			if (user) {
				setPersistedUserStatus(true, user);
			} else {
				setPersistedUserStatus(false, {});
			}
		});
	};

	if (userIsAuthenticated === 'pending') {
		checkForPersistedUser();
	}

	switch (userIsAuthenticated) {
		case true:
			return (
				<React.Fragment>
					<NavBar />
					<Grid container className={classes.root}>
						<Grid item xs={12}>
							<RequiredAuthRoutes path={path} />
						</Grid>
					</Grid>
					<PersistentUserMenu />
				</React.Fragment>
			);

		case false:
			return <Redirect to="/" />;

		default:
			return <CircularProgress />;
	}
};

export default withStyles(styles)(RequiredAuthContainer);
