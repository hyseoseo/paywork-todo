import { takeLatest } from 'redux-saga/effects';
import { handleGetTodos } from './handlers/todos';
import { GET_TODOS } from '../ducks/todos';

export function* watcherSaga() {
  yield takeLatest(GET_TODOS, handleGetTodos);
}
