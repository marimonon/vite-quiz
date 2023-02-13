import { css } from "@emotion/react";
import { useEffect } from "react";
import BattleBg from "./common/BattleBg";
import BattleEnemy from "./common/BattleEnemy";
import BattleHero from "./common/BattleHero";
import BattleHp from "./common/BattleHp";

function Battle({ attack, heroHp, enemyHp }) {
  console.log(attack);
  console.log(heroHp);

  return (
    <div
      css={css`
        position: relative;
      `}
    >
      <BattleBg />
      <div css={battleBox}>
        <div css={heroBox}>
          <div css={getHeroStyle(attack, heroHp)}>
            <BattleHero />
          </div>
          <BattleHp hp={heroHp} />
        </div>
        <div css={enemyBox}>
          <div css={getEnemyStyle(attack)}>
            <BattleEnemy />
          </div>
          <BattleHp hp={enemyHp} />
        </div>
      </div>
    </div>
  );
}

export default Battle;

const getHeroStyle = (attack, heroHp) => {
  if (attack === "hero") {
    return heroAttack;
  }
  if (attack === "enemy") {
    if (heroHp <= 0) {
      return heroDead;
    } else {
      return heroDamage;
    }
  }
};

const getEnemyStyle = (attack) => {
  if (attack === "enemy") {
    return enemyAttack;
  }
  if (attack === "hero") {
    return enemyDamage;
  }
};

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
  animation: hero 1s;
  @keyframes hero {
    0% {
      transform: translateX(10vw);
    }
    50% {
      transform: translate(10vw, 1vw);
    }
    75% {
      transform: translate(10vw, 0);
    }
  }
`;

const heroDamage = css`
  animation: damage 1s;
  @keyframes damage {
    0% {
      opacity: 1;
    }
    25% {
      opacity: 0.3;
    }
    45% {
      opacity: 1;
    }
    75% {
      opacity: 0.3;
    }
  }
`;

const heroDead = css`
  animation: dead 1s forwards;
  @keyframes dead {
    0% {
      opacity: 1;
    }
    25% {
      opacity: 0.3;
    }
    45% {
      opacity: 1;
    }
    75% {
      opacity: 0.3;
    }
    100% {
      opacity: 0;
    }
  }
`;

const enemyAttack = css`
  animation: enemy 1s;
  @keyframes enemy {
    0% {
      transform: translateX(-10vw);
    }
    50% {
      transform: translate(-10vw, 1vw);
    }
    75% {
      transform: translate(0, 0);
    }
  }
`;

const enemyDamage = css`
  animation: damage 1s;
  @keyframes damage {
    0% {
      opacity: 1;
    }
    25% {
      opacity: 0.3;
    }
    45% {
      opacity: 1;
    }
    75% {
      opacity: 0.3;
    }
  }
`;
