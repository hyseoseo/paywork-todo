import axios from 'axios';
import { URL } from 'config';

export function requestGetTodos() {
  return axios.request({
    method: 'get',
    url: URL,
  });
}
