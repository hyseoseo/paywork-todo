import { AxiosResponse } from 'axios';
import { call, put } from 'redux-saga/effects';
import { setTodos } from '../../ducks/todos';
import { requestGetTodos } from '../requests/todos';

export function* handleGetTodos() {
  try {
    const response: AxiosResponse = yield call(requestGetTodos);
    const { data } = response;
    yield put(setTodos(data));
  } catch (error) {
    console.log(error);
  }
}
