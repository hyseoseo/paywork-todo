import React from 'react';
import { css } from '@emotion/react';
import { IProps } from 'config';
import TodoHead from './TodoHead';
import TodoLeft from './TodoLeft';
import TodoList from './TodoList';
import Modal from 'components/Modal';

const TodoContainer: React.FC<IProps> = ({ todos }) => {
  return (
    <div css={Container}>
      <TodoHead />
      <TodoLeft todos={todos} />
      <TodoList todos={todos} />
      <Modal />
    </div>
  );
};

export default TodoContainer;

const Container = css`
  width: 60%;
  margin: 0 auto;
  max-width: 1256px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
`;
