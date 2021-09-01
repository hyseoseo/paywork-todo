import { Itodo } from 'config';
import { RootState } from 'redux/configureStore';

export const GET_TODOS = 'GET_TODOS' as const;
export const SET_TODOS = 'SET_TODOS' as const;

const ADD_TODO = 'ADD_TODO' as const;
const REMOVE_TODO = 'REMOVE_TODO' as const;
const TOGGLE_TODO = 'TOGGLE_TODO' as const;

export const getTodos = () => ({
  type: GET_TODOS,
});

export const setTodos = (todos: Itodo[]) => ({
  type: SET_TODOS,
  payload: todos,
});

export const addTodo = (text: string) => ({
  type: ADD_TODO,
  payload: text,
});
export const removeTodo = (id: number) => ({
  type: REMOVE_TODO,
  payload: id,
});
export const toggleTodo = (id: number) => ({
  type: TOGGLE_TODO,
  payload: id,
});

export type TodoAction =
  | ReturnType<typeof addTodo>
  | ReturnType<typeof removeTodo>
  | ReturnType<typeof toggleTodo>
  | ReturnType<typeof getTodos>
  | ReturnType<typeof setTodos>;

const initialState: Itodo[] = [];

export default (state = initialState, action: TodoAction) => {
  switch (action.type) {
    case SET_TODOS:
      return action.payload;
    case ADD_TODO:
      const added = state.concat({
        id: 0,
        content: action.payload,
        isChecked: false,
        createdAt: new Date(),
      });
      return added;

    /*
    case REMOVE_TODO:
      const filtered = state.todos.filter((todo) => {
        todo.id !== action.id;
      });
      return { ...state, todos: filtered };
    */
    default:
      return state;
  }
};
