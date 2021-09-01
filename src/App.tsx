import { Itodo } from 'config';
import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from 'redux/configureStore';
import { getTodos, addTodo, toggleTodo, removeTodo } from 'redux/ducks/todos';

export default function App() {
  const dispatch = useDispatch();
  const todos = useSelector((state: RootState) => state.todos);
  const [value, setValue] = useState('');

  useEffect(() => {
    dispatch(getTodos());
  }, [dispatch]);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    dispatch(addTodo(value));
    setValue('');
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setValue(e.target.value);
  };

  const handleDelete = (id: string) => {
    dispatch(removeTodo(id));
  };

  const handleToggle = (id: string) => {
    dispatch(toggleTodo(id));
  };

  return (
    <div className="App">
      <ul>
        {todos &&
          todos.map((todo: Itodo) => (
            <li key={todo.id}>
              <button onClick={() => handleDelete(todo.id)}>delete</button>
              <button onClick={() => handleToggle(todo.id)}>done</button>
              <h1>
                {' '}
                {todo.isChecked ? `${todo.content} done` : todo.content}{' '}
              </h1>
            </li>
          ))}
      </ul>
      <form onSubmit={handleSubmit}>
        <input value={value} onChange={handleChange} />
        <button type="submit">추가</button>
      </form>
    </div>
  );
}
