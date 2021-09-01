import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from 'redux/configureStore';
import { getTodos } from 'redux/ducks/todos';
import TodoContainer from 'components/TodoContainer';

export default function App() {
  const dispatch = useDispatch();
  const todos = useSelector((state: RootState) => state.todos);

  //getTodos 액션 생성 함수 dispatch하여 handleGetTodos saga 호출
  useEffect(() => {
    dispatch(getTodos());
  }, [dispatch]);

  return <TodoContainer todos={todos} />;
}
