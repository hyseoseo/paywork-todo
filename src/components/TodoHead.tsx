import React from 'react';
import { css } from '@emotion/react';
import { BOX_STYLE, COLOR_STYLE, FONT_SIZE_STYLE } from 'styles/GlobalStyles';
import TodoCreate from './TodoCreate';

const TodoHead: React.FC = () => {
  return (
    <header css={Header}>
      <span css={LogoStyle}>Todo</span>
      <TodoCreate />
    </header>
  );
};

export default TodoHead;

const Header = css`
  width: 100vw;
  background-color: ${COLOR_STYLE.primary};
  padding: 1.5rem 1.75rem;
  box-shadow: ${BOX_STYLE.shadow};
  position: sticky;
  position: -webkit-sticky;
  top: 0;
  height: 60px;
  display: flex;
  align-items: center;
  z-index: 10;
`;

const LogoStyle = css`
  text-align: center;
  font-size: ${FONT_SIZE_STYLE.large};
  font-weight: bold;
  color: ${COLOR_STYLE.white};
`;
