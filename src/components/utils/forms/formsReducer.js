import { cloneDeep } from 'lodash';
import actionTypes from './formTypes';

const initialState = {};

const createFormState = ({ formId, initialFields }) => ({
	[formId]: {
		id: formId,
		fields: initialFields,
		fieldsSaved: initialFields
	}
});

const getFormData = ({ form, state }) => cloneDeep(state[form] || {});

const formsReducer = (state = initialState, action = {}) => {
	const { type, payload = {} } = action;

	switch (type) {
		case actionTypes.CREATE_FORM: {
			const { form, fields } = payload;
			const formData = createFormState({
				formId: form,
				initialFields: fields
			});
			return {
				...state,
				...formData
			};
		}
		case actionTypes.UPDATE_FORM_FIELD: {
			const { form } = payload;
			const formData = getFormData({ state, form });

			if (payload.field) {
				const { field, value } = payload;

				formData.fields = {
					...formData.fields,
					[field]: value
				};
			}

			return {
				...state,
				[form]: {
					...formData
				}
			};
		}
		case actionTypes.RESET_FORM: {
			return state;
		}
		case actionTypes.SUBMIT_FORM: {
			return state;
		}
		default:
			return state;
	}
};

export default formsReducer;
