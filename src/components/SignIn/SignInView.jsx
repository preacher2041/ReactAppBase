import React from 'react';
import {withStyles} from '@material-ui/core/styles';

import {styles} from './SignInStyles';

export const SignInModalTitle = withStyles(styles)((props) => {
    const {classes} = props;
    return (
        <>
            Sign In Titile
        </>
    );
});

export const SignInModalContent = withStyles(styles)((props) => {
    const {classes} = props;
    return (
        <>
            Sign In Content
        </>
    );
});


export const SignInModalActions = withStyles(styles)((props) => {
    const {classes} = props;
    return (
        <>
            Sign In Actions
        </>
    );
});