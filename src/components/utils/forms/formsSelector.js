import { createSelector } from 'reselect';
import { isEqual } from 'lodash';

const getState = ({ form }) => form || {};
const getProps = (_, props) => props || {};

const selectFormId = createSelector(getProps, ({ form }) => form);

export const selectForm = createSelector([getState, selectFormId], (formState = {}, formId) => formState[formId] || {});

export const selectFormFields = createSelector(selectForm, ({ fields }) => fields || {});
export const selectFormFieldsSaved = createSelector(selectForm, ({ fieldsSaved }) => fieldsSaved || {});
export const selectFormIsClean = createSelector(
	[selectFormFieldsSaved, selectFormFields],
	(savedFields, editableFields) => isEqual(savedFields, editableFields)
);
