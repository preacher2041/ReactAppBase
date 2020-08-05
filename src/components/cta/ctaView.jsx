import React from 'react';
import { Button } from '@material-ui/core';

const CtaView = (props) => {
	const { children, onClick, name } = props;
	return <Button onClick={onClick} name={name}>{children}</Button>;
};

export default CtaView;
