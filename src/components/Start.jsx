import { css } from "@emotion/react";

function Start({ children }) {
  return (
    <p
      css={css`
        margin-bottom: 16px;
        font-weight: bold;
        text-align: center;
      `}
    >
      {children}
    </p>
  );
}

export default Start;
