import React from 'react';
import { useDispatch } from 'react-redux';
import formActions from './formActions';

const formComponent = (formConfig) => (Component) => (props) => {
	const { id } = formConfig;
	const dispatch = useDispatch();

	const updateField = (args) =>
		dispatch(formActions.updateField({ ...args, form: id }));
	const resetForm = (args) =>
		dispatch(formActions.resetForm({ ...args, form: id }));
	const submitForm = (args) =>
		dispatch(formActions.submitForm({ ...args, form: id }));

	const formProps = {
		updateField,
		resetForm,
		submitForm
	};

	return <Component {...props} {...formProps} />;
};

export default formComponent;
