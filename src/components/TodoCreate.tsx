import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { css } from '@emotion/react';
import { FaPlus } from 'react-icons/fa';
import {
  ButtonDefault,
  COLOR_STYLE,
  FONT_SIZE_STYLE,
} from 'styles/GlobalStyles';
import { addTodo } from 'redux/ducks/todos';

const TodoCreate: React.FC = () => {
  const dispatch = useDispatch();
  const [value, setValue] = useState<string>('');

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    dispatch(addTodo(value));
    setValue('');
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setValue(e.target.value);
  };

  return (
    <form css={Form} onSubmit={handleSubmit}>
      <input
        value={value}
        onChange={handleChange}
        css={Input}
        placeholder="Enter What to do..."
      />
      <button css={AddBtn}>
        <FaPlus />
      </button>
    </form>
  );
};

export default TodoCreate;

const Form = css`
  width: 50%;
  height: 40px;
  display: flex;
  align-items: center;
  position: absolute;
  left: 25%;
`;

const Input = css`
  width: 100%;
  height: 100%;
  font-size: ${FONT_SIZE_STYLE.medium};
  padding: 0.9rem 1.6rem;
  border: 1px solid ${COLOR_STYLE.grey};
  border-radius: 3rem;
  outline: none;
  color: ${COLOR_STYLE.greyDarkest};
  &::placeholder {
    font-size: ${FONT_SIZE_STYLE.medium};
  }
`;

const InputError = css`
  ${Input}
  border-color: ${COLOR_STYLE.red};
`;

const AddBtn = css`
  ${ButtonDefault}
  position: absolute;
  right: 0;
  transform: translateX(-50%);
  svg {
    font-size: ${FONT_SIZE_STYLE.large};
    color: ${COLOR_STYLE.primary};
    transition: all 0.2s;
  }
  &:hover svg {
    opacity: 0.7;
  }
`;
