import { combineReducers, createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import todoReducer from './ducks/todos';
import { watcherSaga } from './sagas/rootSaga';

export const reducer = combineReducers({
  todos: todoReducer,
});

export type RootState = ReturnType<typeof reducer>;

const sagaMiddleware = createSagaMiddleware();

const middleware = [sagaMiddleware];

const store = createStore(reducer, {}, applyMiddleware(...middleware));

sagaMiddleware.run(watcherSaga);

export default store;
