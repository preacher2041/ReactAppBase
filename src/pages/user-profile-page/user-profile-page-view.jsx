import React from 'react';
import {withStyles, Grid} from '@material-ui/core';
import UserProfileDisplay from '../../components/user-profile/user-profile-display';
import {styles} from './user-profile-page-styles'

const UserProfilePage = ({classes}) => {
	return(
		<Grid container className={classes.container}>
			<UserProfileDisplay/>
		</Grid>
	);
};



export default withStyles(styles)(UserProfilePage);