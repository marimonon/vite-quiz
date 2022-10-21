import { css } from "@emotion/react";

function Score({ children, last }) {
  return <button css={getItemStyle(last)}>{children}</button>;
}

export default Score;

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

const disabledItemStyle = css`
  ${itemStyle};
  display: none;
`;
const getItemStyle = (last) => {
  if (last) {
    return normalItemStyle;
  } else {
    return disabledItemStyle;
  }
};
