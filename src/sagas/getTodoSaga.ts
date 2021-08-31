import { put, takeEvery, takeLatest } from 'redux-saga/effects';
import {
  LOAD_TODOS_ERROR,
  LOAD_TODOS_LOADING,
  LOAD_TODOS_SUCCESS,
} from '../store/actions';
import { URL } from 'config';

async function fetchAsync(): Promise<any> {
  const response = await fetch(URL, {
    method: 'GET',
  });

  if (response.ok) {
    const data = await response.json();
    return data;
  }

  throw new Error('Unexpected error!!!');
}

function* fetchTodo(): Generator<any> {
  try {
    const todos = yield fetchAsync();

    yield put({ type: LOAD_TODOS_SUCCESS, data: todos });
  } catch (e) {
    yield put({ type: LOAD_TODOS_ERROR, error: e.message });
  }
}

export function* loadTodoSaga() {
  // Allows concurrent fetches of TODOS
  yield takeEvery(LOAD_TODOS_LOADING, fetchTodo);

  // Does not allow concurrent fetches of TODOS
  // yield takeLatest(LOAD_TODOS_LOADING, fetchUser);
}

export default loadTodoSaga;
