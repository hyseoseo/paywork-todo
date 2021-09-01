import { Itodo } from 'config';
import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from 'redux/configureStore';
import { getTodos, addTodo, toggleTodo, removeTodo } from 'redux/ducks/todos';
import TodoContainer from 'components/TodoContainer';

export default function App() {
  const dispatch = useDispatch();
  const todos = useSelector((state: RootState) => state.todos);
  const [value, setValue] = useState<string>('');

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

  const handleCheck = (e: React.ChangeEvent<HTMLInputElement>, id: string) => {
    const obj = { id: id, isChecked: e.target.checked };
    dispatch(toggleTodo(obj));
  };

  return (
    <>
      <TodoContainer todos={todos} />
      {/*}
      <ul>
        {todos &&
          todos.map((todo: Itodo) => (
            <li key={todo.id}>
              <button onClick={() => handleDelete(todo.id)}>delete</button>
              <input
                type="checkbox"
                checked={todo.isChecked}
                onChange={(e) => handleCheck(e, todo.id)}
              />
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
          */}
    </>
  );
}
