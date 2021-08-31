import { URL } from 'config';

export interface Itodo {
  id: string;
  content: string;
  isChecked: boolean;
  createdAt: Date;
}

export const fetchTodos = (): Promise<Itodo> => {
  return fetch(URL, { method: 'GET' }).then((res) => {
    if (!res.ok) {
      throw new Error(res.statusText);
    }
    return res.json() as Promise<Itodo>;
  });
};
