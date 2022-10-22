import { css } from "@emotion/react";

function Modal({ children, modal }) {
  return (
    <>
      <div css={itemStyle}>
        <p>{children}</p>
        <button
          css={css`
            width: 100%;
            padding: 8px;
            border-radius: 4px;
            cursor: pointer;
            text-align: center;
            color: #fff;
            border: none;
            background: #3498db;
            box-shadow: 0 4px 0 #2880b9;
            &:hover {
              opacity: 0.7;
            }
          `}
        >
          閉じる
        </button>
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
