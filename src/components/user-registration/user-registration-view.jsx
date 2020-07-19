import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import { Button, TextField, Typography } from '@material-ui/core';
import { styles } from './user-registration-styles';

const UserRegistrationView = ({
	classes,
	userRegistration,
	updateEmail,
	updatePassword
}) => (
	<form className={classes.form}>
		<Typography
			component="h3"
			variant="h3"
			className={classes.registerNotice}>
			Welcome, please register below
		</Typography>
		<TextField
			required
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
			required
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
				fullWidth
				className={classes.registrationButton}
				variant="contained"
				color="secondary"
				onClick={userRegistration}>
				Create your account
			</Button>
		</div>
	</form>
);

export default withStyles(styles)(UserRegistrationView);
