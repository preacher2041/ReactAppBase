import React from 'react';
import {withStyles} from '@material-ui/core/styles';

import {styles} from './SignUpStyles';

export const SignUpModalTitle = withStyles(styles)((props) => {
    const {classes} = props;
    return (
        <>
            Sign Up Titile
        </>
    );
});

export const SignUpModalContent = withStyles(styles)((props) => {
    const {classes} = props;
    return (
        <>
            Sign Up Content
        </>
    );
});


export const SignUpModalActions = withStyles(styles)((props) => {
    const {classes} = props;
    return (
        <>
            Sign Up Actions
        </>
    );
});