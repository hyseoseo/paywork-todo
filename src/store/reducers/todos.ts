import { Itodo } from 'config';
import { TodoAction, SET_TODOS } from 'store/actions/todos';

const initialState: Itodo[] = [];

const todoReducer = (state = initialState, action: TodoAction) => {
  switch (action.type) {
    case SET_TODOS:
      return action.payload;
    default:
      return state;
  }
};

export default todoReducer;
