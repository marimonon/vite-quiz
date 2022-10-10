import { css } from "@emotion/react";

function Comment({ children }) {
  return (
    <p
      css={css`
        display: block;
        padding: 10px;
        background-color: #fff;
      `}
    >
      {children}
    </p>
  );
}

export default Comment;
