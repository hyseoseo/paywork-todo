import { Itodo } from 'config';
import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from 'redux/configureStore';
import { getTodos, addTodo } from 'redux/ducks/todos';

export default function App() {
  const dispatch = useDispatch();
  const todos = useSelector((state: RootState) => state.todos);
  const [value, setValue] = useState('');

  useEffect(() => {
    dispatch(getTodos());
  }, [dispatch]);

  console.log(todos);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    dispatch(addTodo(value));
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setValue(e.target.value);
  };
  return (
    <div className="App">
      {todos && todos.map((todo: Itodo) => <h1> {todo.content} </h1>)}
      <form onSubmit={handleSubmit}>
        <input value={value} onChange={handleChange} />
        <button type="submit">추가</button>
      </form>
    </div>
  );
}
