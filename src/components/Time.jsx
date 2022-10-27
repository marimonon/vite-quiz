import { css } from "@emotion/react";
import { useEffect, useState } from "react";

function Time({ getElapsedTime }) {
  const [elapsedTime, setElapsedTime] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      // 計算した時間を表示させる
      setElapsedTime(getElapsedTime());
    }, 30);
    console.log("setIntervalを実行しました", intervalId);
    // このコンポーネントが消える時にclearIntervalしている
    return () => {
      clearInterval(intervalId);
      console.log("clearIntervalを実行しました", intervalId);
      console.log(elapsedTime);
    };
  }, []);

  return (
    <p
      css={css`
        margin-bottom: 16px;
      `}
    >
      経過時間: {elapsedTime} 秒
    </p>
  );
}

export default Time;
