import { createBrowserHistory } from 'history';
import { applyMiddleware, createStore } from 'redux';
import { routerMiddleware } from 'connected-react-router';
import createSagaMiddleware from 'redux-saga';
import { composeWithDevTools } from 'redux-devtools-extension';

import rootReducer from './reducers';
import sagas from './sagas';

export const history = createBrowserHistory();

const composedEnhancers = composeWithDevTools({
	trace: true,
	traceLimit: 25
});

const sagaMiddleware = createSagaMiddleware();

const addLoggingToDispatch = (store) => {
	const rawDispatch = store.dispatch;
	return (action) => {
		console.group(action.type);
		console.log('prev state', store.getState());
		console.log('action', action);
		const returnValue = rawDispatch(action);
		console.log('next state', store.getState());
		console.groupEnd(action.type);
		return returnValue;
	};
};

const store = createStore(
	rootReducer(history),
	composedEnhancers(
		applyMiddleware(routerMiddleware(history), sagaMiddleware)
	)
);

store.dispatch = addLoggingToDispatch(store);

sagaMiddleware.run(sagas);

export default store;
