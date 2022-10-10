import { css } from "@emotion/react";

function Choices() {
  return (
    <ul
      id="choices"
      css={css`
        list-style: none;
        padding: 0;
        margin-bottom: 16px;
      `}
    ></ul>
  );
}

export default Choices;
