import React from 'react';
import {
	Dialog,
	DialogActions,
	DialogContent,
	DialogTitle
} from '@material-ui/core';

const ModalView = (props) => {
	const { open, onClose, ariaLabel, modalTitle, modalContent, modalActions } = props;
	return (
		<Dialog open={open} onClose={onClose} aria-labelledby={ariaLabel}>
			<DialogTitle>
				{modalTitle}
				</DialogTitle>
			<DialogContent>
				{modalContent}
			</DialogContent>
			<DialogActions>
				{modalActions}
			</DialogActions>
		</Dialog>
	);
};

export default ModalView;
