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
  const [start, setStart] = useState(true);
  const startClick = () => {
    setStart(false);
  };
  console.log(start + "スタート");
  const [count, setCount] = useState(0);
  const last = count === maxCount;
  const btnClick = () => {
    setCount(count + 1);
    setYourAnswer("");
  };

  const [yourAnswer, setYourAnswer] = useState("");
  const [correct, setCorrect] = useState();
  const [score, setScore] = useState(0);

  const question = quizData[count].q;
  const items = quizData[count].c;
  const comment = quizData[count].m;

  const judge = (item) => {
    setYourAnswer(item);
    if (item === items[0]) {
      setCorrect(true);
      setScore(score + 1);
    } else {
      setCorrect(false);
    }
  };

  const [modal, setModal] = useState();
  const scoreClick = () => {
    setModal(true);
  };

  return (
    <Container>
      <Question>{question}</Question>
      <Choices
        items={items}
        judge={judge}
        yourAnswer={yourAnswer}
        correct={correct}
      />
      <Comment yourAnswer={yourAnswer}>{comment}</Comment>
      {!last ? (
        <Btn onClick={btnClick}>Next</Btn>
      ) : (
        <Btn onClick={scoreClick}>スコア表示</Btn>
      )}
      {modal && (
        <Modal modal={modal}>
          全{maxCount + 1}問題中 {score}問正解です！
        </Modal>
      )}
    </Container>
  );
}

export default App;
