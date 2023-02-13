import { css } from "@emotion/react";

function BattleHp({ hp }) {
  if (hp <= 0) {
    hp = 0;
  }
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
