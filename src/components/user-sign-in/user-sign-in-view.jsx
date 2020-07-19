import React from 'react';
import { styles } from './user-sign-in-styles';
import { withStyles } from '@material-ui/core/styles';
import { Button, TextField, Typography } from '@material-ui/core';

const UserSignInView = ({
	classes,
	updateEmail,
	updatePassword,
	userSignIn
}) => (
	<form className={classes.form}>
		<Typography
			component="h3"
			variant="h3"
			className={classes.signInNotice}>
			Welcome, please sign in below
		</Typography>
		<TextField
			className={classes.textField}
			fullWidth
			variant="outlined"
			color="primary"
			label="Email"
			type="email"
			name="email"
			onChange={updateEmail}
		/>
		<TextField
			className={classes.textField}
			fullWidth
			variant="outlined"
			color="primary"
			label="Password"
			type="password"
			name="password"
			onChange={updatePassword}
		/>
		<div className={classes.formButtons}>
			<Button
				className={classes.signInButton}
				variant="contained"
				color="secondary"
				onClick={userSignIn}>
				Sign in
			</Button>
			<Button
				className={classes.forgottenPasswordButton}
				color="secondary">
				Forgotten password?
			</Button>
		</div>
	</form>
);

export default withStyles(styles)(UserSignInView);
