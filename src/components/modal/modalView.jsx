import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import { Dialog } from '@material-ui/core';

import { styles } from './ModalStyles';

const ModalView = (props) => {
	const {
		open,
		onClose,
		ariaLabel,
		modalTitle,
		modalContent,
		modalActions
	} = props;
	return (
		<Dialog open={open} onClose={onClose} aria-labelledby={ariaLabel}>
			{modalTitle}
			{modalContent}
			{modalActions}
		</Dialog>
	);
};

export default withStyles(styles)(ModalView);
