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
      <Container>
        <BattleHero />
        <BattleEnemy />
      </Container>
    </div>
  );
}

export default Battle;
