import { URL } from 'config';

export interface Itodo {
  id: number;
  content: string;
  isChecked: boolean;
}

export const fetchTodos = async (): Promise<Itodo> => {
  try {
    const response = await fetch(URL, {
      method: 'GET',
    });
    return await response.json();
  } catch (e) {
    throw new Error();
  }
};

export const postNewTodo = (todo: object) => {
  fetch(URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(todo),
  })
    .then((res) => res.json())
    .then((res) => console.log(res));
};
