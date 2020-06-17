import React from 'react';
import Grid from '@material-ui/core/Grid';
import HomePageSplash from '../../components/home-page-splash';
import SignInRegisterComponent from '../../components/signInRegistration';
import { styles } from './home-page-styles';
import { withStyles } from '@material-ui/core';

const HomePage = ({ classes }) => {
	return (
		<Grid container className={classes.container}>
			<Grid item xs={false} md={7}>
				<HomePageSplash />
			</Grid>
			<Grid item xs={12} md={5}>
				<SignInRegisterComponent />
			</Grid>
		</Grid>
	);
};

export default withStyles(styles)(HomePage);
