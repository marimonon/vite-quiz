import { css } from "@emotion/react";
import { useEffect, useState } from "react";

function Time({ getElapsedTime, running, deadTime }) {
  const [elapsedTime, setElapsedTime] = useState(0);
  // 残り時間
  const remainTime = Math.max((deadTime / 1000 - elapsedTime).toFixed(), 0);
  // 残り時間をパーセントに
  const remainPercent =
    ((remainTime / (deadTime / 1000)) * 100).toFixed() + "%";

  useEffect(() => {
    if (running) {
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
    } else {
      setElapsedTime(getElapsedTime());
    }
  }, [running]);

  return (
    <div
      css={css`
        margin-top: -40px;
        width: 80px;
        height: 80px;
        border-radius: 50%;
        background-image: conic-gradient(
          #fbd960 0% ${remainPercent},
          #f00 ${remainPercent} 100%
        );
        margin-left: auto;
        margin-right: auto;
        display: flex;
        justify-content: center;
        align-items: center;
        position: relative;
        z-index: 3;
      `}
    >
      <p
        css={css`
          display: flex;
          justify-content: center;
          align-items: center;
          font-weight: bold;
          font-size: 16px;
          width: 60px;
          height: 60px;
          border-radius: 50%;
          background-color: #fff;
        `}
      >
        {remainTime}
        <span
          css={css`
            font-weight: normal;
            font-size: 10px;
          `}
        >
          秒
        </span>
      </p>
    </div>
  );
}

export default Time;
