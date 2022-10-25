import { css } from "@emotion/react";

function Time({ children }) {
  return (
    <p
      css={css`
        margin-bottom: 16px;
      `}
    >
      {children}
    </p>
  );
}

export default Time;
