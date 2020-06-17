import React from 'react';
import { styles } from './signInRegistrationStyles';
import { withStyles } from '@material-ui/core/styles';
import { Button, TextField, Typography } from '@material-ui/core';

const UserSignInView = ({
	classes,
	updateEmail,
	updatePassword,
	userSignInWithCredentials,
	userSignInWithGoogle
}) => (
	<form className={classes.form}>
		<Typography component="h3" variant="h3" className={classes.loginNotice}>
			Welcome, please login below
		</Typography>
		<TextField
			className={classes.textField}
			fullWidth
			variant="outlined"
			color="inherit"
			label="Email"
			type="email"
			name="email"
			onChange={updateEmail}
		/>
		<TextField
			className={classes.textField}
			fullWidth
			variant="outlined"
			color="inherit"
			label="Password"
			type="password"
			name="password"
			onChange={updatePassword}
		/>
		<div className={classes.formButtons}>
			<Button
				variant="contained"
				color="secondary"
				onClick={userSignInWithCredentials}>
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
