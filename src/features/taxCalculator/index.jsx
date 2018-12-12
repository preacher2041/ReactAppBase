import React from 'react';
import {withStyles} from '@material-ui/core/styles';

import SubmitInvoice from './submitInvoice';

import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const styles = theme => ({
	h4: {
		margin: theme.spacing.unit
	},
	button: {
		margin: theme.spacing.unit
	}
});

class taxCalculator extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			open: false,
		}
	}

	handleClickOpen = () => {
		this.setState({ open: true });
	};

	handleClose = () => {
		this.setState({ open: false });
	};


	render() {
		const {classes } = this.props;

		return (
			<div>
				<Typography variant={'h4'} className={classes.h4}>
					Tax and Savings Calculator
				</Typography>
				<Button
					className={classes.button}
					variant='contained'
					color='secondary'
					onClick={() => this.handleClickOpen()}>
					Create new invoice
				</Button>
				<SubmitInvoice openState={this.state.open} handleClose={this.handleClose}/>
			</div>
		)
	}
}

export default withStyles(styles)(taxCalculator);