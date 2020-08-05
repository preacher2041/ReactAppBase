import { createActionType } from '../../utils/actions';
import { ACTION_UI } from '../../services/constants/actions';

export const OPEN_AUTHENTICATION_MODAL = createActionType({
	id: 'OPEN_AUTHENTICATION_MODAL',
	type: ACTION_UI
});

export const CLOSE_AUTHENTICATION_MODAL = createActionType({
	id: 'CLOSE_AUTHENTICATION_MODAL',
	type: ACTION_UI
});
