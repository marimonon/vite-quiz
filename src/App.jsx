function App() {
  return (
    <section className="container">
      <p id="question"></p>
      <ul id="choices"></ul>
      <p id="comment"></p>
      <div id="btn" className="disabled">
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
