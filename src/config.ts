export const BASE_URL = 'https://paywork-todos.herokuapp.com';

export interface Itodo {
  id: string;
  content: string;
  isChecked: boolean;
  createdAt: Date;
}

export interface IProps {
  todos: Itodo[];
}
