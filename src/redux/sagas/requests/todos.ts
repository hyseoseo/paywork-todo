import axios from 'axios';
import { BASE_URL } from 'config';

export function requestGetTodos() {
  return axios.request({
    method: 'get',
    url: `${BASE_URL}/todo`,
  });
}

export function requestPostNewTodo(content: string) {
  return axios.request({
    method: 'post',
    url: `${BASE_URL}/todo`,
    data: {
      content: content,
      isChecked: false,
      createdAt: new Date(),
    },
  });
}
