import axios from 'axios';
import { BASE_URL, SORT_OPTION } from 'config';

export function requestGetTodos() {
  return axios.request({
    method: 'get',
    url: `${BASE_URL}/todo?_sort=${SORT_OPTION}`,
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
