import { css } from "@emotion/react";
import Btn from "./Btn";

function Modal({ children, reset }) {
  return (
    <>
      <div css={itemStyle}>
        <p>{children}</p>
        <Btn onClick={reset}>閉じる</Btn>
      </div>
      <div css={backItemStyle}></div>
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
