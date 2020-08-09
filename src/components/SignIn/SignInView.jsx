import React from 'react';
import {
	DialogActions,
	DialogContent,
	DialogTitle,
	Typography
} from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';

import { styles } from './SignInStyles';

export const SignInModalTitle = withStyles(styles)((props) => {
	const { classes } = props;
	return (
		<div className={classes.dialogTitle}>
			<Typography className={classes.dialog_h1} variant="h1">
				Hello!
			</Typography>
			<Typography className={classes.dialog_h4} variant="h4">
				Sign into your account here
			</Typography>
		</div>
	);
});

export const SignInModalContent = withStyles(styles)((props) => {
	const { classes } = props;
	return (
		<DialogContent className={classes.dialogContent}>
			Sign In Content
		</DialogContent>
	);
});

export const SignInModalActions = withStyles(styles)((props) => {
	const { classes } = props;
	return (
		<DialogActions className={classes.dialogActions}>
			Sign In Actions
		</DialogActions>
	);
});
