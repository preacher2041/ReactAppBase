import React from 'react';
import { Grid, Typography, withStyles } from '@material-ui/core';
import {styles} from './signed-in-user-landing-page-splash-styles';

const SignedInUserLandingPageSplashView = ({classes, userDetails}) => {
	console.log(userDetails);
	return (
		<Grid container>
			<Typography variant={'h3'} className={classes.h2}>
				Hello, {userDetails.displayName}!
			</Typography>
		</Grid>
	)
};

export default withStyles(styles)(SignedInUserLandingPageSplashView);