import React from 'react';
import {Button} from '@material-ui/core';

const CtaView = (props) => {
    const {children} = props;
    return (
        <Button>{children}</Button>
    );
};

export default CtaView;