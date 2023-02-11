import { css } from "@emotion/react";
import BattleBg from "./common/BattleBg";
import BattleEnemy from "./common/BattleEnemy";
import BattleHero from "./common/BattleHero";
import BattleHp from "./common/BattleHp";

function Battle({ correct }) {
  return (
    <div
      css={css`
        position: relative;
      `}
    >
      <BattleBg />
      <div css={battleBox}>
        <div css={heroBox}>
          <div css={heroAttack}>
            <BattleHero />
          </div>
          <BattleHp />
        </div>
        <div css={enemyBox}>
          <div css={enemyAttack}>
            <BattleEnemy />
          </div>
          <BattleHp />
        </div>
      </div>
    </div>
  );
}

export default Battle;

const battleBox = css`
  position: absolute;
  display: flex;
  align-items: flex-end;
  left: 0;
  bottom: 10px;
  width: 100%;
`;

const heroBox = css`
  width: 50%;
  text-align: center;
  padding-left: 20px;
  padding-right: 50px;
`;

const enemyBox = css`
  width: 50%;
  text-align: center;
  padding-left: 50px;
  padding-right: 20px;
`;

const heroAttack = css`
  transform: translateX(6vw);
  animation: show 1s both;
`;

const enemyAttack = css`
  transform: translateX(-6vw);
`;
