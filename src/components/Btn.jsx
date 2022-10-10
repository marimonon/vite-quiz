import { css } from "@emotion/react";

function Btn({ children }) {
  return (
    <button
      id="btn"
      css={css`
        background: #3498db;
        padding: 8px;
        border-radius: 4px;
        cursor: pointer;
        text-align: center;
        color: #fff;
        box-shadow: 0 4px 0 #2880b9;
      `}
    >
      {children}
    </button>
  );
}

export default Btn;
