import React from 'react';
import { withStyles } from '@material-ui/core/styles';

import {styles} from './homePageStyles';

const HomePage = ({classes}) => {

    return (
        <div className={classes.root}>
        </div>
    );
};

export default withStyles(styles)(HomePage);