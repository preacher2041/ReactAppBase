import { createActions } from '../../utils/actions';

import { OPEN_MODAL, CLOSE_MODAL } from './userAuthenticationTypes';

export const openModal = createActions(OPEN_MODAL);
export const closeModal = createActions(CLOSE_MODAL);
