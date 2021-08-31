import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from 'modules';
import { fetchTodos, postNewTodo } from 'utils/api';
import TodoContainer from 'components/TodoContainer';

const App: React.FC = () => {
  const todos = useSelector((state => state.loadTodoReducer);

  return (
    <div>
      <TodoContainer todos={todos} />
    </div>
  );
};

export default App;
