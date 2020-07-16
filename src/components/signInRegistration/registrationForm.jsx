import React from 'react';
import { styles } from './signInRegistrationStyles';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { Typography } from '@material-ui/core';

import formComponent from '../utils/forms/formComponent';
import { registrationFormConfig } from './signInRegistrationFormConfig';

const registrationForm = ({ classes, updateField, resetForm, submitForm, formFields }) => {
	const { registrationEmail, registrationPassword } = formFields;

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
		<>
			<Typography component="h3" variant="h3" className={classes.registerNotice}>
				Welcome, please register below
			</Typography>
			<TextField
				required
				className={classes.textField}
				fullWidth
				variant="outlined"
				label="Email"
				type="email"
				name="registrationEmail"
				value={registrationEmail || ''}
				onChange={handleOnChange}
				onKeyUp={handleOnKeyUp}
			/>
			<TextField
				required
				className={classes.textField}
				fullWidth
				variant="outlined"
				label="Password"
				type="password"
				name="registrationPassword"
				value={registrationPassword || ''}
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
		</>
	);
};

export default withStyles(styles)(formComponent(registrationFormConfig)(registrationForm));
