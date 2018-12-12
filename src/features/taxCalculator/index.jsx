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
			numChildren: 0
		}
	}

	onAddChild() {
		this.setState({
			numChildren: this.state.numChildren + 1
		});
	}

	render() {
		const children = [];

		for (let i = 0; i < this.state.numChildren; i += 1) {
			children.push(<SubmitInvoice key={i} number={i} />);
		}

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
					onClick={() => this.onAddChild()}>
					Create new invoice
				</Button>
				{children}
			</div>
		)
	}
}

export default withStyles(styles)(taxCalculator);