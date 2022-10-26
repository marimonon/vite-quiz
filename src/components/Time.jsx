import { css } from "@emotion/react";
import { useEffect, useState } from "react";

function Time({ getElapsedTime }) {
  const [elapsedTime, setElapsedTime] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setElapsedTime(getElapsedTime());
    }, 30);
    return () => clearInterval(intervalId);
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
