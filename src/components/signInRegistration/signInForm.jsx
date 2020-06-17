import React from 'react';
import { styles } from './signInRegistrationStyles';
import { withStyles } from '@material-ui/core/styles';
import { Button, TextField, Typography } from '@material-ui/core';

import formComponent from '../utils/forms/formComponent';
import { signInFormConfig } from './signInRegistrationFormConfig';

const UserSignInView = ({ classes, updateField, resetForm, submitForm }) => {
	const handleOnChange = (event) => {
		const field = event.target.name;
		const value = event.target.value;

		updateField({ field, value });
	};

	const handleOnKeyUp = (event) => {
		const target = event.target;

		if (event.key === 'Enter') {
			target.blur();
		} else if (event.key === 'Escape') {
			resetForm();
			target.blur();
		}
	};

	const handleOnClick = () => {
		submitForm();
	};

	return (
		<form className={classes.form}>
			<Typography
				component="h3"
				variant="h3"
				className={classes.loginNotice}>
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
				onChange={handleOnChange}
				onKeyUp={handleOnKeyUp}
			/>
			<TextField
				className={classes.textField}
				fullWidth
				variant="outlined"
				color="inherit"
				label="Password"
				type="password"
				name="password"
				onChange={handleOnChange}
				onKeyUp={handleOnKeyUp}
			/>
			<div className={classes.formButtons}>
				<Button
					variant="contained"
					color="secondary"
					onClick={handleOnClick}>
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
};

export default withStyles(styles)(
	formComponent(signInFormConfig)(UserSignInView)
);
