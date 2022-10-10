import { css } from "@emotion/react";

function Choices() {
  return (
    <ul
      css={css`
        list-style: none;
        padding: 0;
        margin-bottom: 16px;
      `}
    >
      <li>カスピ海</li>
      <li>カリブ海</li>
      <li>琵琶湖</li>
    </ul>
  );
}

export default Choices;
