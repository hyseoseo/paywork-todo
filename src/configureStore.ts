import { applyMiddleware, createStore } from 'redux';
import createSagaMiddleware from 'redux-saga';
import reduxSagaReducer from 'store/actions';
import loadTodoSaga from 'sagas/getTodoSaga';

const sagaMiddleware = createSagaMiddleware();

export function configureStore(initialState: any) {
  const middleware = [sagaMiddleware];

  const store = createStore(reduxSagaReducer, applyMiddleware(...middleware));

  sagaMiddleware.run(loadTodoSaga);

  return store;
}
