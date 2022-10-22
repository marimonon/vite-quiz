import { css } from "@emotion/react";

function Btn({ children, onClick }) {
  return (
    <button onClick={onClick} css={btnStyle}>
      {children}
    </button>
  );
}

export default Btn;

const btnStyle = css`
  width: 100%;
  padding: 8px;
  border-radius: 4px;
  cursor: pointer;
  text-align: center;
  color: #fff;
  border: none;
  background: #3498db;
  box-shadow: 0 4px 0 #2880b9;
  &:hover {
    opacity: 0.7;
  }
`;

const selectedItemStyle = css`
  background: #ccc;
  box-shadow: 0 4px 0 #999;
  pointer-events: none;
`;
