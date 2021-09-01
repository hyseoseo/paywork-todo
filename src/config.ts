export const BASE_URL =
  'https://my-json-server.typicode.com/hyseoseo/paywork-todo-mockserver';

export interface Itodo {
  id: string;
  content: string;
  isChecked: boolean;
  createdAt: Date;
}

export interface IProps {
  todos: Itodo[];
}
