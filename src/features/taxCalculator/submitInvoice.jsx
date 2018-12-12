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
	}
});

class submitInvoice extends React.Component {
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
		const invoiceTotal = this.state.daysWorked * this.state.dayRate;

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
				<DialogTitle id="form-dialog-title">Subscribe</DialogTitle>
				<DialogContent>
					<DialogContentText>
						To subscribe to this website, please enter your email address here. We will send
						updates occasionally.
					</DialogContentText>
					<form className={classes.form}>
						<TextField
							required
							id="date"
							label="Date worked"
							type="date"
							defaultValue="2017-05-24"
							className={classes.textField}
							InputLabelProps={{
								shrink: true,
							}}
							onChange={this.updateWorkedDate}
						/>
						<TextField
							required
							id="date"
							label="Invoice Date"
							type="date"
							defaultValue="2017-05-24"
							className={classes.textField}
							InputLabelProps={{
								shrink: true,
							}}
							onChange={this.updateInvoiceDate}
						/>
						<TextField
							required
							className={classes.textField}
							variant='outlined'
							color='inherit'
							label='Days Worked'
							type='number'
							name='text1'
							onChange={this.updateDaysWorked}
						/>
						<TextField
							required
							className={classes.textField}
							variant='outlined'
							color='inherit'
							label='Day Rate'
							type='number'
							name='text2'
							onChange={this.updateDayRate}
						/>
						<Button
							className={classes.button}
							variant='contained'
							color='secondary'
							onClick={this.calculateInvoice}>
							Submit
						</Button>
					</form>
				</DialogContent>
				<DialogActions>
					<Button onClick={handleClose} color="primary">
						Cancel
					</Button>
					<Button onClick={handleClose} color="primary">
						Subscribe
					</Button>
				</DialogActions>
			</Dialog>
		)
	}
}

export default withStyles(styles)(submitInvoice);