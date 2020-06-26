import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import formActions from './formActions';
import usePreviousProp from '../usePreviousProps';
import { selectFormIsClean, selectFormFields } from './formsSelector';

const formComponent = (formConfig) => (Component) => (props) => {
	const { id, formFieldsSelector } = formConfig;
	const dispatch = useDispatch();

	const initialFieldData = formFieldsSelector ? useSelector(formFieldsSelector) : formFieldsSelector;
	const previousFieldData = usePreviousProp(initialFieldData);
	const formFields = useSelector((state) => selectFormFields(state, { form: id }));
	const isFormClean = useSelector((state) => selectFormIsClean(state, { form: id }));

	const createForm = (args) => dispatch(formActions.createForm({ ...args, form: id }));
	const resetForm = (args) => dispatch(formActions.resetForm({ ...args, form: id }));
	const submitForm = (args) => {
		if (!isFormClean) {
			dispatch(formActions.submitForm({ ...args, form: id }));
		}
	};
	const updateField = (args) => dispatch(formActions.updateField({ ...args, form: id }));

	useEffect(() => {
		if (!previousFieldData && initialFieldData !== null) {
			createForm({ form: id, fields: initialFieldData });
		}
	}, [dispatch, initialFieldData, previousFieldData, id, createForm]);

	const formProps = {
		updateField,
		resetForm,
		submitForm,
		formFields
	};

	return <Component {...props} {...formProps} />;
};

export default formComponent;
