import { css } from "@emotion/react";

function App() {
  return (
    <section
      css={css`
        background: pink;
      `}
    >
      <p id="question"></p>
      <ul id="choices"></ul>
      <p id="comment"></p>
      <div id="btn" css={{ backgroundColor: "blue" }}>
        Next
      </div>
      <div id="startBtn" className="disabled">
        Start
      </div>
      <section id="result" className="hidden">
        <p></p>
        <a href="">Replay?</a>
      </section>
    </section>
  );
}

export default App;
