import React from 'react';
import { connect } from 'react-redux';
import {withStyles} from '@material-ui/core/styles';

import TaxCalculator from '../../features/taxCalculator'

import Typography from '@material-ui/core/Typography';

const styles = theme => ({
	h2: {
		margin: theme.spacing.unit
	}
});

const UserLandingPage = ({ classes, signedInUser }) => (
	<div>
		<Typography variant={'h3'} className={classes.h2}>
			Hello, {signedInUser.displayName}!
		</Typography>
		<TaxCalculator />
	</div>
);

const mapStateToProps = state => ({
	signedInUser: state.auth.signedInUser
});

export default connect(mapStateToProps)(withStyles(styles)(UserLandingPage));