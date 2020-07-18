import { applyMiddleware, createStore } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { composeWithDevTools } from 'redux-devtools-extension';

import rootReducer from './reducers';
import sagas from './sagas';

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
	rootReducer,
	composedEnhancers(applyMiddleware(sagaMiddleware))
);

store.dispatch = addLoggingToDispatch(store);

sagaMiddleware.run(sagas);

export default store;
