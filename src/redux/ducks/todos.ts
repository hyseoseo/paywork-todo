export const GET_TODOS = 'GET_TODOS';
export const SET_TODOS = 'SET_TODOS';

export const getTodos = () => ({
  type: GET_TODOS,
});

export const setTodos = (todos: any) => ({
  type: SET_TODOS,
  todos,
});

const initialState = {
  todos: undefined,
};

export default (state = initialState, action: any) => {
  switch (action.type) {
    case SET_TODOS:
      const { todos } = action;
      return { ...state, todos };
    default:
      return state;
  }
};
