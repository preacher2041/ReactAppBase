import React from 'react';
import { Button } from '@material-ui/core';

const CtaView = (props) => {
	const { children, onClick } = props;
	return <Button onClick={onClick}>{children}</Button>;
};

export default CtaView;
