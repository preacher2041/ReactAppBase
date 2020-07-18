import React from 'react';
import {withStyles, Paper} from '@material-ui/core';
import {styles} from './user-profile-display-styles'

const UserProfileDisplayView = ({classes, userDetails}) => {
	return (
		<Paper className={classes.paper}>
			{userDetails.displayName}
			{userDetails.email}
		</Paper>
	)
};

export default withStyles(styles)(UserProfileDisplayView);