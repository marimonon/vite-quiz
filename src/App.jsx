import { css } from "@emotion/react";
import Btn from "./components/Btn";

function App() {
  return (
    <section
      css={css`
        width: 400px;
        margin: 8px auto;
        background-color: #fff;
        border-radius: 4px;
        padding: 16px;
        position: relative;
      `}
    >
      <p
        id="question"
        css={css`
          margin-bottom: 16px;
          font-weight: bold;
        `}
      ></p>
      <ul
        id="choices"
        css={css`
          list-style: none;
          padding: 0;
          margin-bottom: 16px;
        `}
      ></ul>
      <p
        id="comment"
        css={css`
          display: block;
          padding: 10px;
          background-color: #fff;
        `}
      ></p>
      <Btn />
    </section>
  );
}

export default App;
