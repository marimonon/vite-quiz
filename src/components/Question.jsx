import { css } from "@emotion/react";

function Question({ children }) {
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

export default Question;
