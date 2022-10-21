import { useState } from "react";
import Btn from "./components/Btn";
import Choices from "./components/Choices";
import Comment from "./components/Comment";
import Container from "./components/Container";
import Modal from "./components/Modal";
import Question from "./components/Question";
import Score from "./components/Score";
import quizData from "./util/quizData.json";

function App() {
  // useState(0)だとcountに０が入る
  const [count, setCount] = useState(0);
  const maxCount = quizData.length - 1;
  const [last, setLast] = useState();
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
    if (count === maxCount) {
      // console.log("lastはtrueだよ");
      setLast(true);
    } else {
      // console.log("lastはfalseだよ");
      setLast(false);
    }
  };

  const [modal, setModal] = useState();
  const scoreClick = () => {
    setModal(true);
  };

  // console.log(yourAnswer + "=yourAnswerだよ");
  // console.log(correct + "=correctだよ");
  // console.log(maxCount + "=maxCountだよ");
  // console.log(count + "=countだよ");
  // console.log(last + "=lastだよ");

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
      <Btn btnClick={btnClick} yourAnswer={yourAnswer} last={last}>
        Next
      </Btn>
      <Score last={last} scoreClick={scoreClick}>
        スコア表示
      </Score>
      <Modal modal={modal}>
        全{maxCount + 1}問題中 {score}問正解です！
      </Modal>
    </Container>
  );
}

export default App;
