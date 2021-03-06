import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { css } from '@emotion/react';
import { FaPlus } from 'react-icons/fa';
import {
  ButtonDefault,
  COLOR_STYLE,
  FONT_SIZE_STYLE,
} from 'styles/GlobalStyles';
import { addTodo } from 'store/actions/todos';
import { showModal } from 'store/actions/modal';

const TodoCreate: React.FC = () => {
  const dispatch = useDispatch();
  const [value, setValue] = useState<string>('');

  //addTodo 액션 생성 함수 호출하여 handleNewTodo saga 호출
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    if (!value) {
      dispatch(showModal('할 일을 입력해주세요!'));
      return;
    }
    dispatch(addTodo(value));
    setValue('');
  };

  //input value로 value state setting
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setValue(e.target.value);
  };

  return (
    <>
      <form css={Form} onSubmit={handleSubmit}>
        <input
          value={value}
          onChange={handleChange}
          css={Input}
          placeholder="Enter what to do..."
        />
        <button css={AddBtn}>
          <FaPlus />
        </button>
      </form>
    </>
  );
};

export default TodoCreate;

const Form = css`
  width: 50%;
  height: 40px;
  max-width: 50%;
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
