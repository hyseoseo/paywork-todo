import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

import { Itodo } from 'modules/todos';
import { addTodo, removeTodo, changeStatusTodo } from 'modules/todos';

interface IProps {
  todos: Itodo[];
}

const TodoContainer: React.FC<IProps> = ({ todos }) => {
  const dispatch = useDispatch();
  const [value, setValue] = useState('');

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(addTodo(value));
    setValue('');
  };

  const handleClick = (id: number) => {
    dispatch(changeStatusTodo(id));
  };

  const handleRemove = (id: number) => {
    dispatch(removeTodo(id));
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input value={value} onChange={(e) => setValue(e.target.value)} />
        <button type="submit">ㅡ등록</button>
      </form>
      {todos.map((todo) => {
        return (
          <div key={todo.id} onClick={() => handleClick(todo.id)}>
            {todo.content}
            <button onClick={() => handleRemove(todo.id)}>삭제</button>
          </div>
        );
      })}
    </>
  );
};

export default TodoContainer;
