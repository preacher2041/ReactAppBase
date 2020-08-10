import React from 'react';
import { withStyles } from '@material-ui/core/styles';

import { styles } from './SignUpStyles';

export const SignUpModalTitle = withStyles(styles)(() => {
	return <>Sign Up Titile</>;
});

export const SignUpModalContent = withStyles(styles)(() => {
	return <>Sign Up Content</>;
});

export const SignUpModalActions = withStyles(styles)(() => {
	return <>Sign Up Actions</>;
});
