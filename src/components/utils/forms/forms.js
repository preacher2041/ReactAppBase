import React from 'react';

const formComponent = (formConfig) => (Component) => (props) => {
	return <Component {...props} />;
};

export default {
	formComponent
};
