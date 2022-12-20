import { css } from "@emotion/react";

function Battle({ children }) {
  return (
    <p
      css={css`
        margin-bottom: 16px;
        font-weight: bold;
      `}
    >
      {children}
    </p>
  );
}

export default Battle;
