import React from 'react';
import { css } from '@emotion/react';
import { IProps } from 'config';
import TodoHead from './TodoHead';
import TodoBoundary from './TodoBoundary';
import TodoList from './TodoList';

const TodoContainer: React.FC<IProps> = ({ todos }) => {
  return (
    <div css={Container}>
      <TodoHead />
      <TodoBoundary todos={todos} />
      <TodoList todos={todos} />
    </div>
  );
};

export default TodoContainer;

const Container = css`
  width: 60%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
`;
