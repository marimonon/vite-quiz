import { css } from "@emotion/react";
import Btn from "./Btn";
// 紙吹雪
import useWindowSize from "react-use/lib/useWindowSize";
import Confetti from "react-confetti";

function Modal({ children, reset }) {
  const { width, height } = useWindowSize();
  return (
    <>
      <div css={itemStyle}>
        <p>{children}</p>
        <Btn onClick={reset}>閉じる</Btn>
      </div>
      <div css={backItemStyle}>
        <Confetti width={width} height={height} recycle={true} />
      </div>
    </>
  );
}

export default Modal;

const backItemStyle = css`
  position: fixed;
  background: rgba(0, 0, 0, 0.5);
  width: 100vw;
  height: 100vh;
  top: 0;
  left: 0;
  z-index: 100;
`;

const itemStyle = css`
  position: absolute;
  display: block;
  background-color: #fff;
  border: 1px solid #999;
  border-radius: 10px;
  padding: 20px;
  text-align: center;
  width: 280px;
  top: 40px;
  left: calc(50% - 160px);
  z-index: 200;
`;
