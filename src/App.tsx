import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from 'modules';
import TodoContainer from 'components/TodoContainer';

const App: React.FC = () => {
  const todos = useSelector((state: RootState) => state.todoReducer);
  return (
    <div>
      <TodoContainer todos={todos} />
    </div>
  );
};

export default App;
