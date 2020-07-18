export const createActionTypes = ({ id = '' }) => {
	return {
		REQUEST: `${id}/request`,
		SUCCESS: `${id}/success`,
		FAIL: `${id}/fail`
	};
};

export const createActions = (actionTypesObj = {}) => {
	return Object.keys(actionTypesObj)
		.map((key) => ({
			type: actionTypesObj[key],
			actionType: key.toLocaleLowerCase()
		}))
		.reduce(
			(agg, { type, actionType }) => ({
				...agg,
				[actionType]: (payload) => ({
					type,
					payload
				})
			}),
			{}
		);
};
