import { css } from "@emotion/react";

function Choices({ items, judge, yourAnswer, correct }) {
  return (
    <ul css={listStyle}>
      {items.map((item) => {
        const choiceClick = () => {
          if (yourAnswer === "") {
            judge(item);
          }
        };
        return (
          <li
            onClick={choiceClick}
            css={getItemStyle(item, yourAnswer, correct)}
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

const lockListStyle = css`
  ${listStyle};
  li {
    pointer-events: none;
  }
`;

const getItemStyle = (item, yourAnswer, correct) => {
  if (item === yourAnswer) {
    if (correct) {
      return correctItemStyle;
    } else {
      return wrongItemStyle;
    }
  }
  if (yourAnswer !== "") {
    return disabledItemStyle;
  }
  return normalItemStyle;
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
