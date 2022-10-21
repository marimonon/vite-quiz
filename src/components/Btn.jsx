import { css } from "@emotion/react";

function Btn({ children, onClick, last }) {
  return (
    <button onClick={onClick} css={getItemStyle(last)}>
      {children}
      {end(last)}
    </button>
  );
}

export default Btn;

const itemStyle = css`
  width: 100%;
  padding: 8px;
  border-radius: 4px;
  cursor: pointer;
  text-align: center;
  color: #fff;
  border: none;
  &:hover {
    opacity: 0.7;
  }
`;

const normalItemStyle = css`
  ${itemStyle};
  background: #3498db;
  box-shadow: 0 4px 0 #2880b9;
`;

// const selectedItemStyle = css`
//   ${itemStyle};
//   background: #3498db;
//   box-shadow: 0 4px 0 #2880b9;
//   opacity: 0.5;
// `;

const disabledItemStyle = css`
  ${itemStyle};
  background: #ccc;
  box-shadow: 0 4px 0 #999;
  pointer-events: none;
`;
const getItemStyle = (last) => {
  if (last) {
    return disabledItemStyle;
  } else {
    return normalItemStyle;
  }
};

const end = (last) => {
  if (last) {
    return "終わりました！";
  }
};
