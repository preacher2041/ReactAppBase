import { createActionType } from '../../utils/actions';
import { ACTION_UI } from '../../services/constants/actions';

export const OPEN_MODAL = createActionType({
	id: 'OPEN_MODAL',
	type: ACTION_UI
});

export const CLOSE_MODAL = createActionType({
	id: 'CLOSE_MODAL',
	type: ACTION_UI
});
