import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from 'redux/configureStore';
import { getTodos } from 'redux/ducks/todos';

export default function App() {
  const dispatch = useDispatch();
  const todos = useSelector((state: RootState) => state.todos.todos);

  useEffect(() => {
    dispatch(getTodos());
  }, [dispatch]);

  console.log(todos);

  return (
    <div className="App">
      {todos && todos.map((todo: any) => <h1> Hello, {todo.content} </h1>)}
    </div>
  );
}
