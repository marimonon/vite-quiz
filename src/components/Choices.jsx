import { css } from "@emotion/react";

function Choices() {
  const items = ["カスピ海", "カリブ海", "バナナ"];

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
          <li css={itemStyle} key={item}>
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
