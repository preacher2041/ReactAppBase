import React from 'react';
import { styles } from './user-sign-in-styles';
import { withStyles } from '@material-ui/core/styles';
import { Button, TextField, Typography } from '@material-ui/core';
import google from '../../assets/images/google.695a3160.svg';

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
		<Button
			size="large"
			variant="outlined"
			className={classes.googleButton}
			onClick={userSignInWithGoogle}>
			<img src={google} alt="google" className={classes.googleIcon} />
			&nbsp;Sign in with Google
		</Button>
		<div className={classes.formDividerContainer}>
			<div className={classes.formDivider} />
			<Typography variant="subtitle2" className={classes.formDividerText}>
				or
			</Typography>
			<div className={classes.formDivider} />
		</div>

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
