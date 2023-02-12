import { css } from "@emotion/react";

function BattleHp({ hp }) {
  return (
    <div
      css={css`
        width: 100%;
        height: 1vw;
        background-color: #f00;
      `}
    >
      <div
        css={css`
          width: ${hp}%;
          height: 1vw;
          background-color: #0f0;
        `}
      ></div>
    </div>
  );
}

export default BattleHp;
