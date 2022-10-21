import { css } from "@emotion/react";

function Comment({ children, yourAnswer }) {
  return <p css={getItemStyle(yourAnswer)}>{children}</p>;
}

export default Comment;

const getItemStyle = (yourAnswer) => {
  if (yourAnswer === "") {
    return disabledItemStyle;
  } else {
    return normalItemStyle;
  }
};

const itemStyle = css`
  display: block;
  padding: 10px;
  background-color: #fff;
`;

const normalItemStyle = css`
  ${itemStyle};
`;

const disabledItemStyle = css`
  ${itemStyle};
  display: none;
`;
