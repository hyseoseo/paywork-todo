import axios from 'axios';
import { URL } from 'config';

export function requestGetTodos() {
  return axios.request({
    method: 'get',
    url: URL,
  });
}

export function requestPostNewTodo(content: string) {
  return axios.request({
    method: 'post',
    url: URL,
    data: {
      id: 0,
      content: content,
      isChecked: false,
      createdAt: new Date(),
    },
  });
}
