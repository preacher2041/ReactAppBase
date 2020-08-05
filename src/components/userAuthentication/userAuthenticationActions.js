import { createActions } from '../../utils/actions';

import { OPEN_AUTHENTICATION_MODAL, CLOSE_AUTHENTICATION_MODAL } from './UserAuthenticationTypes';

export const openAuthenticationModal = createActions(OPEN_AUTHENTICATION_MODAL);
export const closeAuthenticationModal = createActions(CLOSE_AUTHENTICATION_MODAL);
