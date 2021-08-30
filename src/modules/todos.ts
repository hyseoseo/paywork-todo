//actions
const ADD_TODO = 'todo/ADD_TODO' as const;
const REMOVE_TODO = 'todo/REMOVE_TODO' as const;
const CHANGE_STATUS_TODO = 'todo/CHANGE_STATUS_TODO' as const;

//action creators
export const addTodo = (text: string) => ({ type: ADD_TODO, payload: text });
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
  text: string;
  done: boolean;
}

//initial todos
export const initialState: Itodo[] = [
  {
    id: 0,
    text: 'todo1',
    done: false,
  },
  {
    id: 1,
    text: 'todo2',
    done: false,
  },
];

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
        text: action.payload,
        done: false,
      });

    case REMOVE_TODO:
      return state.filter((todo) => todo.id !== action.payload);

    case CHANGE_STATUS_TODO:
      return state.map((todo) =>
        todo.id === action.payload ? { ...todo, done: !todo.done } : todo,
      );

    default:
      return state;
  }
}
