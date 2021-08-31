export const LOAD_TODOS_LOADING = 'REDUX_SAGA_LOAD_TODOS_LOADING';
export const LOAD_TODOS_SUCCESS = 'REDUX_SAGA_LOAD_TODOS_SUCCESS';
export const LOAD_TODOS_ERROR = 'REDUX_SAGA_LOAD_TODOS_ERROR';

export const loadTodos = () => (dispatch: any) => {
  dispatch({ type: LOAD_TODOS_LOADING });
};

const initialState = {
  data: [],
  loading: false,
  error: '',
};

export default function reduxSagaReducer(state = initialState, action: any) {
  switch (action.type) {
    case LOAD_TODOS_LOADING: {
      return {
        ...state,
        loading: true,
        error: '',
      };
    }
    case LOAD_TODOS_SUCCESS: {
      return {
        ...state,
        data: action.data,
        loading: false,
      };
    }
    case LOAD_TODOS_ERROR: {
      return {
        ...state,
        loading: false,
        error: action.error,
      };
    }
    default: {
      return state;
    }
  }
}
