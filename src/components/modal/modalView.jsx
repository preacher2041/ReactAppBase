import React from 'react';
import {
	Dialog,
	DialogActions,
	DialogContent,
	DialogContentText,
	DialogTitle
} from '@material-ui/core';

const ModalView = (props) => {
	const { open, onClose, ariaLabel } = props;
	return (
		<Dialog open={open} onClose={onClose} aria-labelledby={ariaLabel}>
			<DialogTitle id="form-dialog-title">Subscribe</DialogTitle>
			<DialogContent>
				<DialogContentText>
					To subscribe to this website, please enter your email
					address here. We will send updates occasionally.
				</DialogContentText>
			</DialogContent>
			<DialogActions></DialogActions>
		</Dialog>
	);
};

export default ModalView;
