import { isObject } from 'lodash';
import { ACTION_API, ACTION_UI } from '../services/constants/actions';

const REQUEST = 'request';
const SUCCESS = 'success';
const FAIL = 'fail';

const getActionNameSpace = ({ type = '', id = '', operand = '' }) =>
	`${type}/${id}${operand.length ? `/${operand}` : ''}`;

export const createActionType = ({ type = ACTION_UI, id = '' }) => {
	switch (type) {
		case ACTION_API:
			return {
				REQUEST: getActionNameSpace({ type, id, operand: REQUEST }),
				SUCCESS: getActionNameSpace({ type, id, operand: SUCCESS }),
				FAIL: getActionNameSpace({ type, id, operand: FAIL })
			};
		case ACTION_UI:
		default:
			return getActionNameSpace({ type, id });
	}
};

export const createActions = (actionNameSpace) => {
	if (isObject(actionNameSpace)) {
		return Object.keys(actionNameSpace)
			.map((key) => ({
				type: actionNameSpace[key],
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
	} else {
		return (payload) => ({
			type: actionNameSpace,
			payload
		});
	}
};
