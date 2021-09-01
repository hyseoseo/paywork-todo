import axios, { AxiosResponse } from 'axios';
import { call, put } from 'redux-saga/effects';
import { addTodo, setTodos, getTodos } from '../../ducks/todos';
import { requestGetTodos, requestPostNewTodo } from '../requests/todos';
import { URL } from 'config';

export function* handleGetTodos() {
  try {
    const response: AxiosResponse = yield call(requestGetTodos);
    const { data } = response;
    yield put(setTodos(data));
  } catch (error) {
    console.log(error);
  }
}

export function* handleNewTodo(action: any) {
  const postcall = () => {
    return axios.request({
      method: 'post',
      url: URL,
      data: {
        content: action.payload,
        isChecked: false,
        createdAt: new Date(),
      },
    });
  };
  try {
    const response: AxiosResponse = yield call(postcall);
    const { data } = response;
    yield put(getTodos());
  } catch (error) {
    console.log(error);
  }
}
