import React from 'react';

import TabsContainer from '../containers/tabsContainer';

import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
	layout: {
		width: 'auto',
		display: 'block', // Fix IE11 issue.
		marginLeft: theme.spacing.unit * 3,
		marginRight: theme.spacing.unit * 3,
		[theme.breakpoints.up(400 + theme.spacing.unit * 3 * 2)]: {
			width: 400,
			marginLeft: 'auto',
			marginRight: 'auto'
		}
	}
});

const SignIn = ({ classes, props }) => (
	<main className={classes.layout}>
		<TabsContainer />
	</main>
);

export default withStyles(styles)(SignIn);