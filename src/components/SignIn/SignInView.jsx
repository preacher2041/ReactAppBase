import React from 'react';
import {
	Button,
	DialogContent,
	IconButton,
	InputAdornment,
	Link,
	TextField,
	Typography
} from '@material-ui/core';
import { Close, EmailRounded } from '@material-ui/icons';
import { withStyles } from '@material-ui/core/styles';

import { styles } from './SignInStyles';

export const SignInModalTitle = withStyles(styles)((props) => {
	const { classes } = props;
	return (
		<div className={classes.dialogTitle}>
			<IconButton aria-label="close" className={classes.closeButton}>
				<Close />
			</IconButton>
			<Typography className={classes.dialog_h2} variant="h2">
				Hello!
			</Typography>
			<Typography className={classes.dialog_body} variant="body1">
				Sign into your account here
			</Typography>
		</div>
	);
});

export const SignInModalContent = withStyles(styles)((props) => {
	const { classes } = props;
	return (
		<DialogContent className={classes.dialogContent}>
			<TextField
				className={classes.textField}
				placeholder="Email"
				variant="outlined"
				InputProps={{
					startAdornment: (
						<InputAdornment position="start">
							<EmailRounded color="disabled" />
						</InputAdornment>
					)
				}}
			/>
			<Button
				className={classes.button}
				variant="contained"
				color="primary">
				Next
			</Button>
		</DialogContent>
	);
});

export const SignInModalActions = withStyles(styles)((props) => {
	const { classes } = props;
	return (
		<div className={classes.dialogFooter}>
			<Typography className={classes.dialogFooterText}>
				Forgot password?
				<Link className={classes.dialogFooterLinks}> Reset</Link>
			</Typography>
			<Typography className={classes.dialogFooterText}>
				Don't have an account?
				<Link className={classes.dialogFooterLinks}> Sign Up</Link>
			</Typography>
		</div>
	);
});
