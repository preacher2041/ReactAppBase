import React from 'react';
import {styles} from './user-registration-styles'
import {withStyles} from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { Typography } from '@material-ui/core';
import google from '../../../assets/images/google.695a3160.svg';

const UserRegistrationView = ({classes, userRegistration, updateEmail, updatePassword, userSignInWithGoogle}) => (
	<form className={classes.form}>
		<Typography component='h3' variant='h3'
					className={classes.registerNotice}>
			Welcome, please register below
		</Typography>
		<TextField
			required
			className={classes.textField}
			fullWidth
			variant='outlined'
			color='inherit'
			label='Email'
			type='email'
			name='email'
			onChange={updateEmail}
		/>
		<TextField
			required
			className={classes.textField}
			fullWidth
			variant='outlined'
			color='inherit'
			label='Password'
			type='password'
			name='password'
			onChange={updatePassword}
		/>
		<div className={classes.formButtons}>
			<Button
				fullWidth
				className={classes.button}
				variant='contained'
				color='secondary'
				onClick={userRegistration}>
				Create your account
			</Button>
		</div>
		<div className={classes.formDividerContainer}>
			<div className={classes.formDivider} />
			<Typography variant='subtitle2'
						className={classes.formDividerText}>
				or
			</Typography>
			<div className={classes.formDivider} />
		</div>
		<Button
			size="large"
			variant='outlined'
			className={classes.googleButton}
			onClick={userSignInWithGoogle}>

			<img
				src={google}
				alt="google"
				className={classes.googleIcon} />
			&nbsp;Sign in with Google
		</Button>
	</form>
);

export default withStyles(styles)(UserRegistrationView);