import { css } from "@emotion/react";

function Btn({ children, btnClick, yourAnswer, last, startClick }) {
  return (
    <button onClick={btnClick} css={getItemStyle(last, yourAnswer)}>
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

const selectedItemStyle = css`
  ${itemStyle};
  background: #ccc;
  box-shadow: 0 4px 0 #999;
  pointer-events: none;
`;

const disabledItemStyle = css`
  ${itemStyle};
  display: none;
`;
const getItemStyle = (last, yourAnswer) => {
  if (yourAnswer === "") {
    return selectedItemStyle;
  } else {
    if (last) {
      return disabledItemStyle;
    } else {
      return normalItemStyle;
    }
  }
};

const end = (last) => {
  if (last) {
    return "終わりました！";
  }
};
