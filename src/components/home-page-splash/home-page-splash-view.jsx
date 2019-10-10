import React from 'react';
import {withStyles} from '@material-ui/core/styles';
import {Grid, Typography} from '@material-ui/core';
import {styles} from './home-page-splash-styles';

const HomePageSplash = ({classes}) => (
	<React.Fragment>
		<Grid container className={classes.container}>
			<Grid item md={1} />
			<Grid item md={8}>
				<Typography className={classes.h2} variant='h2'>
					Welcome to the React App please sign in or register to access features
				</Typography>
			</Grid>
			<Grid item md={3} />
		</Grid>
	</React.Fragment>
);

export default withStyles(styles)(HomePageSplash);