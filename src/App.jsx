import { useState } from "react";
import Btn from "./components/Btn";
import Choices from "./components/Choices";
import Comment from "./components/Comment";
import Container from "./components/Container";
import Modal from "./components/Modal";
import Question from "./components/Question";
import quizData from "./util/quizData.json";

const maxCount = quizData.length - 1;

function App() {
  const [count, setCount] = useState(0);
  const last = count === maxCount;

  const startClick = () => {
    setMode("answering");
  };

  const btnClick = () => {
    setCount(count + 1);
    setYourAnswer("");
    setMode("answering");
  };

  const [yourAnswer, setYourAnswer] = useState("");
  const [correct, setCorrect] = useState();
  const [score, setScore] = useState(0);

  // start | answering | judged | result
  const [mode, setMode] = useState("start");

  const question = quizData[count].q;
  const items = quizData[count].c;
  const comment = quizData[count].m;

  const judge = (item) => {
    setYourAnswer(item);
    setMode("judged");
    if (item === items[0]) {
      setCorrect(true);
      setScore(score + 1);
    } else {
      setCorrect(false);
    }
  };
  const scoreClick = () => {
    setMode("result");
  };

  const reset = () => {
    setCount(0);
    setYourAnswer("");
    setScore(0);
    setMode("answering");
  };

  return (
    <Container>
      {mode === "start" && <Btn onClick={startClick}>Start</Btn>}
      {mode !== "start" && (
        <>
          <Question>{question}</Question>
          <Choices
            items={items}
            judge={judge}
            yourAnswer={yourAnswer}
            correct={correct}
            mode={mode}
          />
        </>
      )}
      {mode === "judged" && (
        <>
          <Comment>{comment}</Comment>
          {!last ? (
            <Btn onClick={btnClick}>Next</Btn>
          ) : (
            <Btn onClick={scoreClick}>スコア表示</Btn>
          )}
        </>
      )}
      {mode === "result" && (
        <Modal reset={reset}>
          全{maxCount + 1}問題中 {score}問正解です！
        </Modal>
      )}
    </Container>
  );
}

export default App;
