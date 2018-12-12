import React from 'react';
import {withStyles} from '@material-ui/core/styles';

import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import TextField from '@material-ui/core/TextField';


const styles = theme => ({
	h5: {
		margin: theme.spacing.unit
	},
	form: {
		[theme.breakpoints.up(400 + theme.spacing.unit * 3 * 2)]: {
			width: 400,
			marginLeft: 'auto',
			marginRight: 'auto'
		},
		marginTop: theme.spacing.unit,
		marginBottom: theme.spacing.unit
	},
	textField: {
		marginTop: theme.spacing.unit,
		marginBottom: theme.spacing.unit
	},
	button: {
		marginTop: theme.spacing.unit,
		marginBottom: theme.spacing.unit
	}
});

class submitInvoiceDialog extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			salary: 730
		}
	}

	updateWorkedDate = event => {
		const workedDate = event.target.value;

		this.setState({
			workedDate
		});
	};

	updateInvoiceDate = event => {
		const invoiceDate = event.target.value;

		this.setState({
			invoiceDate
		});
	};

	updateDaysWorked = event => {
		const daysWorked = parseInt(event.target.value);

		this.setState({
			daysWorked
		});
	};

	updateDayRate = event => {
		const dayRate = parseInt(event.target.value);

		this.setState({
			dayRate
		});
	};

	calculateInvoice = () => {
		const {handleClose} = this.props;
		const invoiceTotal = this.state.daysWorked * this.state.dayRate;

		handleClose();

		this.setState({
			invoiceTotal
		});

		this.calculateCorporationTax();
	};

	calculateCorporationTax = () => {
		const corporationTax = this.state.invoiceTotal - this.state.salary * 0.20;

		this.setState({
			corporationTax
		});

		this.calculateDistributableProfits();
	};

	calculateDistributableProfits = () => {
		const distributableProfits = this.state.invoiceTotal - this.state.salary * 0.80;

		this.setState({
			distributableProfits
		});

		this.calculateTotalEarned();
	};

	calculateTotalEarned = () => {
		const totalEarned = this.state.salary + this.state.distributableProfits;

		this.setState({
			totalEarned
		});
	};

	render() {
		const {classes, openState, handleClose} = this.props;

		return (
			<Dialog
				open={openState}
				onClose={handleClose}
				aria-labelledby="form-dialog-title"
			>
				<DialogTitle id="form-dialog-title">Enter invoice details</DialogTitle>
				<DialogContent>
					<DialogContentText>
						Please fill out the form below to work your corporation tax and personal tax contributions
					</DialogContentText>
					<form className={classes.form}>
						<TextField
							required
							fullWidth
							id="date"
							label="Date worked"
							type="date"
							className={classes.textField}
							InputLabelProps={{
								shrink: true,
							}}
							onChange={this.updateWorkedDate}
						/>
						<TextField
							required
							fullWidth
							id="date"
							label="Invoice date"
							type="date"
							className={classes.textField}
							InputLabelProps={{
								shrink: true,
							}}
							onChange={this.updateInvoiceDate}
						/>
						<TextField
							required
							fullWidth
							className={classes.textField}
							variant='outlined'
							color='inherit'
							label='Number of days worked'
							type='number'
							name='text1'
							onChange={this.updateDaysWorked}
						/>
						<TextField
							required
							fullWidth
							className={classes.textField}
							variant='outlined'
							color='inherit'
							label='Day rate'
							type='number'
							name='text2'
							onChange={this.updateDayRate}
						/>
					</form>
				</DialogContent>
				<DialogActions>
					<Button
						variant='contained'
						color="primary"
						onClick={handleClose}>
						Cancel
					</Button>
					<Button
						variant='contained'
						color='secondary'
						onClick={this.calculateInvoice}>
						Submit
					</Button>
				</DialogActions>
			</Dialog>
		)
	}
}

export default withStyles(styles)(submitInvoiceDialog);