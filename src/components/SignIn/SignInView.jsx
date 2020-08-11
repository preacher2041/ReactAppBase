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
import {
	Close,
	EmailRounded,
	Visibility,
	VisibilityOff
} from '@material-ui/icons';
import { withStyles } from '@material-ui/core/styles';

import { styles } from './SignInStyles';

export const SignInModalTitle = withStyles(styles)((props) => {
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
				Sign into your account here
			</Typography>
		</div>
	);
});

export const SignInModalContent = withStyles(styles)((props) => {
	const displayEmail = false;
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
	return (
		<DialogContent className={classes.dialogContent}>
			{displayEmail ? (
				<>
					<TextField
						className={classes.textField}
						placeholder="Email"
						variant="outlined"
						InputProps={emailInputProps}
					/>
					<Button
						className={classes.button}
						variant="contained"
						color="primary">
						Next
					</Button>
				</>
			) : (
				<>
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
				</>
			)}
		</DialogContent>
	);
});

export const SignInModalActions = withStyles(styles)((props) => {
	const { classes } = props;
	return (
		<div className={classes.dialogFooter}>
			<Typography
				className={`${classes.dialogFooterText} ${classes.passwordResetLink}`}>
				Forgot password?&nbsp;
				<Link className={classes.dialogFooterLinks}>Reset</Link>
			</Typography>
			<Typography
				className={`${classes.dialogFooterText} ${classes.signUpLink}`}>
				Don't have an account?&nbsp;
				<Link className={classes.dialogFooterLinks}>Sign Up</Link>
			</Typography>
		</div>
	);
});
