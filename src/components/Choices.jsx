import { css } from "@emotion/react";

function Choices({ items, judge, yourAnswer, correct, mode, attack }) {
  return (
    <ul css={listStyle}>
      {items.map((item) => {
        const choiceClick = () => {
          if (mode === "answering") {
            judge(item);
          }
        };
        return (
          <li
            onClick={choiceClick}
            css={getItemStyle(item, yourAnswer, correct, mode, attack)}
            key={item}
          >
            {item}
          </li>
        );
      })}
    </ul>
  );
}

export default Choices;

const listStyle = css`
  list-style: none;
  padding: 0;
  margin-bottom: 16px;
`;

const getItemStyle = (item, yourAnswer, correct, mode, attack) => {
  if (mode === "answering") {
    return normalItemStyle;
  }
  if (item === yourAnswer) {
    // 正解かつ時間切れでない時
    if (correct && attack !== "enemy") {
      return correctItemStyle;
    } else {
      return wrongItemStyle;
    }
  }
  return disabledItemStyle;
};

const itemStyle = css`
  border: 1px solid #ccc;
  border-radius: 4px;
  padding: 10px;
  margin-bottom: 10px;
`;

const normalItemStyle = css`
  ${itemStyle};
  cursor: pointer;
  &:hover {
    background: #f8f8f8;
  }
`;

const correctItemStyle = css`
  ${itemStyle};
  background: #d4edda;
`;

const wrongItemStyle = css`
  ${itemStyle};
  background: #f8d8da;
`;

const disabledItemStyle = css`
  ${itemStyle};
  opacity: 0.5;
`;
