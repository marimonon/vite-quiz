import { css } from "@emotion/react";

function Choices() {
  return (
    <ul
      css={css`
        list-style: none;
        padding: 0;
        margin-bottom: 16px;
        li {
          border: 1px solid #ccc;
          border-radius: 4px;
          padding: 10px;
          margin-bottom: 10px;
          cursor: pointer;
          &:hover {
            background: #f8f8f8;
          }
        }
      `}
    >
      <li>カスピ海</li>
      <li>カリブ海</li>
      <li>琵琶湖</li>
    </ul>
  );
}

export default Choices;
