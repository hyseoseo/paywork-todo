import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from 'store/configureStore';
import { getTodos } from 'store/actions/todos';
import TodoContainer from 'components/todo/TodoContainer';

export default function App() {
  const dispatch = useDispatch();
  const todos = useSelector((state: RootState) => state.todos.todos);

  //getTodos 액션 생성 함수 dispatch하여 handleGetTodos saga 호출
  useEffect(() => {
    dispatch(getTodos());
  }, [dispatch]);

  return <TodoContainer todos={todos} />;
}
