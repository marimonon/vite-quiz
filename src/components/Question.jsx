import { css } from "@emotion/react";

function Question({ children }) {
  return (
    <p
      id="question"
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
