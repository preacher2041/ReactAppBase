import React from 'react';
import { Grid, Typography, withStyles } from '@material-ui/core';
import { useSelector } from 'react-redux';
import { styles } from './signed-in-user-landing-page-splash-styles';

import { selectUserName } from '../../services/selectors/userAuthSelectors';

const SignedInUserLandingPageSplashView = ({ classes }) => {
	const displayName = useSelector(selectUserName);
	return (
		<Grid container>
			<Typography variant={'h3'} className={classes.h2}>
				Hello, {displayName}!
			</Typography>
		</Grid>
	);
};

export default withStyles(styles)(SignedInUserLandingPageSplashView);
