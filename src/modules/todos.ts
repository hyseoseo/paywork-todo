import { call } from 'redux-saga/effects';
import { fetchTodos } from 'utils/api';
import { URL } from 'config';

//actions
export const ADD_TODO = 'todo/ADD_TODO' as const;
export const REMOVE_TODO = 'todo/REMOVE_TODO' as const;
export const CHANGE_STATUS_TODO = 'todo/CHANGE_STATUS_TODO' as const;

//action creators
export const addTodo = (content: string) => ({
  type: ADD_TODO,
  payload: content,
});
export const removeTodo = (id: number) => ({ type: REMOVE_TODO, payload: id });
export const changeStatusTodo = (id: number) => ({
  type: CHANGE_STATUS_TODO,
  payload: id,
});

//action type
type TodoAction =
  | ReturnType<typeof addTodo>
  | ReturnType<typeof removeTodo>
  | ReturnType<typeof changeStatusTodo>;

//todo interface
export interface Itodo {
  id: number;
  content: string;
  isChecked: boolean;
}

//initial todos
export const initialState: Itodo[] = [];

//Reducer
export default function todoReducer(
  state: Itodo[] = initialState,
  action: TodoAction,
): Itodo[] {
  switch (action.type) {
    case ADD_TODO:
      const id = Math.max(...state.map((todo) => todo.id)) + 1;
      return state.concat({
        id,
        content: action.payload,
        isChecked: false,
      });

    case REMOVE_TODO:
      return state.filter((todo) => todo.id !== action.payload);

    case CHANGE_STATUS_TODO:
      return state.map((todo) =>
        todo.id === action.payload
          ? { ...todo, isChecked: !todo.isChecked }
          : todo,
      );

    default:
      return state;
  }
}
