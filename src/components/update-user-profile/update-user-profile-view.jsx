import React from 'react';
import {styles} from './update-user-profile-styles';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';

const UpdateUserProfileView = ({classes, updateName, setName}) => (
	<Paper className={classes.paper}>
		<form>
			<TextField
				className={classes.textField}
				fullWidth
				variant='outlined'
				color='inherit'
				label='Name'
				type='text'
				name='name'
				onChange={updateName}
			/>
			<Button
				fullWidth
				className={classes.button}
				variant='contained'
				color='secondary'
				onClick={setName}>
				Submit
			</Button>
		</form>
	</Paper>
);

export default withStyles(styles)(UpdateUserProfileView);