import { css } from "@emotion/react";
import BattleBg from "./common/BattleBg";
import BattleEnemy from "./common/BattleEnemy";
import BattleHero from "./common/BattleHero";
import Container from "./Container";

function Battle({}) {
  return (
    <div
      css={css`
        position: relative;
      `}
    >
      <BattleBg />
      <div
        css={css`
          position: absolute;
          display: flex;
          align-items: flex-end;
          left: 0;
          top: 0;
          width: 100%;
        `}
      >
        <div
          css={css`
            width: 50%;
            text-align: center;
          `}
        >
          <BattleHero />
        </div>
        <div
          css={css`
            width: 50%;
            text-align: center;
          `}
        >
          <BattleEnemy />
        </div>
      </div>
    </div>
  );
}

export default Battle;
