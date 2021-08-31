import { URL } from 'config';

export const fetchTodos = async () => {
  try {
    const response = await fetch(URL, {
      method: 'GET',
    });
    const data = await response.json();
    return data;
  } catch (e) {
    console.log(e);
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
