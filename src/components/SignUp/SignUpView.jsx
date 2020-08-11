import React from 'react';
import {
	Button,
	Checkbox,
	DialogContent,
	FormGroup,
	FormControlLabel,
	IconButton,
	InputAdornment,
	Link,
	TextField,
	Typography
} from '@material-ui/core';
import {
	Close,
	EmailRounded,
	Visibility,
	VisibilityOff
} from '@material-ui/icons';
import { withStyles } from '@material-ui/core/styles';

import { styles } from './SignUpStyles';

export const SignUpModalTitle = withStyles(styles)((props) => {
	const { classes, onClose } = props;
	return (
		<div className={classes.dialogTitle}>
			{onClose ? (
				<IconButton className={classes.closeButton} onClick={onClose}>
					<Close />
				</IconButton>
			) : null}

			<Typography
				className={`${classes.dialogText} ${classes.dialogTitleText}`}
				variant="h2">
				Hello!
			</Typography>
			<Typography
				className={`${classes.dialogText} ${classes.dialogSubTitleText}`}
				variant="body1">
				Sign up for an account here
			</Typography>
		</div>
	);
});

export const SignUpModalContent = withStyles(styles)((props) => {
	const visibility = false;
	const { classes } = props;
	const emailInputProps = {
		className: `${classes.textFieldInput}`,
		startAdornment: (
			<InputAdornment position="start">
				<EmailRounded color="disabled" />
			</InputAdornment>
		)
	};
	const passwordInputProps = {
		className: `${classes.textFieldInput}`,
		startAdornment: (
			<InputAdornment position="start">
				{visibility ? (
					<Visibility color="disabled" />
				) : (
					<VisibilityOff color="disabled" />
				)}
			</InputAdornment>
		)
	};

	const termsAndConditionsText = (
		<Typography>
			I agree to the &nbsp;
			<Link>Terms & Conditions</Link>
		</Typography>
	);

	const newsLetterText = (
		<Typography>I want to subscribe to the newsletter</Typography>
	);

	const checkbox = <Checkbox color="primary" />;

	return (
		<DialogContent className={classes.dialogContent}>
			<TextField
				className={classes.textField}
				placeholder="Email"
				variant="outlined"
				InputProps={emailInputProps}
			/>
			<TextField
				className={classes.textField}
				placeholder="Password"
				variant="outlined"
				InputProps={passwordInputProps}
			/>
			<Button
				className={classes.button}
				variant="contained"
				color="primary">
				Sign In
			</Button>
			<FormGroup aria-label="position" row>
				<FormControlLabel
					value="termsAndConditions"
					control={checkbox}
					label={termsAndConditionsText}
					labelPlacement="right"
				/>
				<FormControlLabel
					className={classes.checkbox}
					value="newsletter"
					control={checkbox}
					label={newsLetterText}
					labelPlacement="right"
				/>
			</FormGroup>
		</DialogContent>
	);
});

export const SignUpModalActions = withStyles(styles)((props) => {
	const { classes } = props;
	return (
		<div className={classes.dialogFooter}>
			<Typography
				className={`${classes.dialogFooterText} ${classes.signInLink}`}>
				Already have an account?&nbsp;
				<Link className={classes.dialogFooterLinks}>Sign In</Link>
			</Typography>
		</div>
	);
});
