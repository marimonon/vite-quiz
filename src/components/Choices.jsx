import { css } from "@emotion/react";

function Choices({ items, judge, yourAnswer, correct }) {
  return (
    <ul
      css={css`
        list-style: none;
        padding: 0;
        margin-bottom: 16px;
      `}
    >
      {items.map((item) => {
        return (
          <li
            onClick={() => judge(item)}
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

const getItemStyle = (item, yourAnswer, correct) => {
  console.log(correct);
  if (item === yourAnswer) {
    if (correct) {
      return selectedItemStyle;
    } else {
      return disabledItemStyle;
    }
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

const selectedItemStyle = css`
  ${itemStyle};
  background: #d4edda;
`;

const disabledItemStyle = css`
  ${itemStyle};
  background: #f8d8da;
`;
