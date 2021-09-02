import React from 'react';
import { css } from '@emotion/react';
import { useDispatch } from 'react-redux';
import { TiDeleteOutline } from 'react-icons/ti';
import {
  COLOR_STYLE,
  BOX_STYLE,
  FONT_SIZE_STYLE,
  ButtonDefault,
} from 'styles/GlobalStyles';
import { Itodo, IProps } from 'config';
import { toggleTodo, removeTodo } from 'store/actions/todos';

const TodoList: React.FC<IProps> = ({ todos }) => {
  const dispatch = useDispatch();

  //removeTodo 액션 생성함수 호출하여 handleRemoveTodo saga 호출
  const handleDelete = (id: string) => {
    dispatch(removeTodo(id));
  };

  //toggleTodo 액션 생성함수 호출하여 handleToggleTodo saga 호출
  const handleCheck = (e: React.ChangeEvent<HTMLInputElement>, id: string) => {
    const obj = { id: id, isChecked: e.target.checked };
    dispatch(toggleTodo(obj));
  };

  return (
    <ul css={Container}>
      {todos &&
        todos.map((todo: Itodo) => (
          <li css={List} key={todo.id}>
            <input
              type="checkbox"
              css={Checkbox}
              checked={todo.isChecked}
              onChange={(e) => handleCheck(e, todo.id)}
            />
            <h2 css={todo.isChecked ? Done : Text}>{todo.content}</h2>
            <button onClick={() => handleDelete(todo.id)} css={DeleteButton}>
              <TiDeleteOutline />
            </button>
          </li>
        ))}
    </ul>
  );
};

export default TodoList;

const Container = css`
  margin-top: 10px;
  width: 100%;
  max-width: 768px;
`;

const List = css`
  position: relative;
  background: ${COLOR_STYLE.white};
  padding: 1rem 1.6rem;
  border: 1px solid ${COLOR_STYLE.grey};
  border-left: 4px solid ${COLOR_STYLE.grey};
  border-radius: 3px;
  box-shadow: ${BOX_STYLE.shadow};
  margin-bottom: 1rem;
  transition: all 0.2s;
  display: flex;
  align-items: center;

  &:first-of-type {
    margin-top: 3px;
  }
`;

const Checkbox = css`
  outline: none !important;
  cursor: pointer;
  background: lightgray;
  border: 1px solid ${COLOR_STYLE.greyDarker};
`;

const Text = css`
  margin-left: 15px;
  font-size: ${FONT_SIZE_STYLE.medium};
`;

const Done = css`
  ${Text}
  color: ${COLOR_STYLE.greyDarker};
  text-decoration: line-through;
`;

const DeleteButton = css`
  ${ButtonDefault}
  position: absolute;
  right: 10px;
  transform: translate(-25%, 15%);
  svg {
    color: ${COLOR_STYLE.primary};
    font-size: ${FONT_SIZE_STYLE.larger};
    transition: all 0.3s;
  }
  &:hover {
    svg {
      color: ${COLOR_STYLE.greyDarkest};
    }
  }
`;
