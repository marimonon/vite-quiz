import { css } from "@emotion/react";

function Container({ children }) {
  return (
    <section
      css={css`
        max-width: 400px;
        margin: 8px auto;
        background-color: #fff;
        border-radius: 4px;
        padding: 16px;
        position: relative;
      `}
    >
      {children}
    </section>
  );
}

export default Container;
