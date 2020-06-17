import React from 'react';
import { styles } from './signInRegistrationStyles';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { Typography } from '@material-ui/core';

import formComponent from '../utils/forms/formComponent';
import { registrationFormConfig } from './signInRegistrationFormConfig';

const UserRegistrationView = ({
	classes,
	updateField,
	resetForm,
	submitForm
}) => {
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
				className={classes.registerNotice}>
				Welcome, please register below
			</Typography>
			<TextField
				required
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
				required
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
					fullWidth
					className={classes.button}
					variant="contained"
					color="secondary"
					onClick={handleOnClick}>
					Create your account
				</Button>
			</div>
		</form>
	);
};

export default withStyles(styles)(
	formComponent(registrationFormConfig)(UserRegistrationView)
);
