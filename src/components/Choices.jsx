import { css } from "@emotion/react";

function Choices({ items, judge }) {
  return (
    <ul
      css={css`
        list-style: none;
        padding: 0;
        margin-bottom: 16px;
      `}
    >
      {items.map((item) => {
        const light = item === items[0];
        return (
          <li
            onClick={() => judge(item)}
            css={light ? lightItemStyle : itemStyle}
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

const itemStyle = css`
  border: 1px solid #ccc;
  border-radius: 4px;
  padding: 10px;
  margin-bottom: 10px;
  cursor: pointer;
  &:hover {
    background: #f8f8f8;
  }
`;

const lightItemStyle = css`
  ${itemStyle};
  background: #d4edda;
`;
