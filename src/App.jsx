import { css } from "@emotion/react";

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
      <div
        id="btn"
        css={css`
          background: #3498db;
          padding: 8px;
          border-radius: 4px;
          cursor: pointer;
          text-align: center;
          color: #fff;
          box-shadow: 0 4px 0 #2880b9;
        `}
      >
        Next
      </div>
      <div
        id="startBtn"
        className="disabled"
        css={css`
          background: #3498db;
          padding: 8px;
          border-radius: 4px;
          cursor: pointer;
          text-align: center;
          color: #fff;
          box-shadow: 0 4px 0 #2880b9;
        `}
      >
        Start
      </div>
      <section
        id="result"
        className="hidden"
        css={css`
          position: absolute;
          width: 300px;
          background: #fff;
          padding: 30px;
          box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
          top: 50px;
          margin: 0 auto;
          border-radius: 4px;
          text-align: center;
          transition: 0.4s;
        `}
      >
        <p
          css={css`
            font-size: 24px;
          `}
        ></p>
        <a
          href=""
          css={css`
            background: #3498db;
            padding: 8px;
            border-radius: 4px;
            cursor: pointer;
            text-align: center;
            color: #fff;
            box-shadow: 0 4px 0 #2880b9;
            display: block;
            text-decoration: none;
          `}
        >
          Replay?
        </a>
      </section>
    </section>
  );
}

export default App;
