import { all, takeLatest } from 'redux-saga/effects';
import { handleGetTodos, handleNewTodo } from './handlers/todos';
import { GET_TODOS, ADD_TODO, TodoAction } from '../ducks/todos';

export function* watcherSaga() {
  yield all([
    takeLatest(GET_TODOS, handleGetTodos),
    takeLatest(ADD_TODO, handleNewTodo),
  ]);
}
