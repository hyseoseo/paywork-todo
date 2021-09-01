import axios, { AxiosResponse } from 'axios';
import { call, put } from 'redux-saga/effects';
import {
  addTodo,
  setTodos,
  getTodos,
  TodoAction,
  toggleTodo,
} from '../../ducks/todos';
import { requestGetTodos, requestPostNewTodo } from '../requests/todos';
import { BASE_URL } from 'config';

export function* handleGetTodos() {
  try {
    const response: AxiosResponse = yield call(requestGetTodos);
    const { data } = response;
    yield put(setTodos(data));
  } catch (error) {
    console.log(error);
  }
}

export function* handleNewTodo(action: ReturnType<typeof addTodo>) {
  const postcall = () => {
    return axios.request({
      method: 'post',
      url: `${BASE_URL}/todo`,
      data: {
        content: action.payload,
        isChecked: false,
        createdAt: new Date(),
      },
    });
  };
  try {
    yield call(postcall);
    yield put(getTodos());
  } catch (error) {
    console.log(error);
  }
}

export function* handleToggleTodo(action: ReturnType<typeof toggleTodo>) {
  const postcall = () => {
    return axios.request({
      method: 'patch',
      url: `${BASE_URL}/todo/${action.payload}`,
      data: {
        isChecked: true,
      },
    });
  };

  try {
    const res: AxiosResponse = yield call(postcall);
    const { data } = res;
    console.log(res);
    yield put(getTodos());
  } catch (error) {
    console.log(error);
  }
}

export function* handleRemoveTodo(action: ReturnType<typeof toggleTodo>) {
  const postcall = () => {
    return axios.request({
      method: 'delete',
      url: `${BASE_URL}/todo/${action.payload}`,
    });
  };

  try {
    const res: AxiosResponse = yield call(postcall);
    const { data } = res;
    console.log(res);
    yield put(getTodos());
  } catch (error) {
    console.log(error);
  }
}
