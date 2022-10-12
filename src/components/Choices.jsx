import { css } from "@emotion/react";

function Choices({ items }) {
  const correct = (item, i) => {
    console.log(item);
    if (i == 0) {
      console.log("wasshoi!");
    }
  };
  console.log(items);
  return (
    <ul
      css={css`
        list-style: none;
        padding: 0;
        margin-bottom: 16px;
      `}
    >
      {items.map((item, i) => {
        return (
          <li onClick={() => correct(item, i)} css={itemStyle} key={item}>
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
