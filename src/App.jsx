import { useState } from "react";
import Btn from "./components/Btn";
import Choices from "./components/Choices";
import Comment from "./components/Comment";
import Container from "./components/Container";
import Question from "./components/Question";
import quizData from "./util/quizData.json";

function App() {
  // useState(0)だとcountに０が入る
  const [count, setCount] = useState(0);
  const maxCount = quizData.length - 2;
  const [last, setLast] = useState();
  const btnClick = () => {
    setCount(count + 1);
    setYourAnswer();
    if (count === maxCount) {
      console.log("lastはtrueだよ");
      setLast(true);
    } else {
      console.log("lastはfalseだよ");
      setLast(false);
    }
  };

  const [yourAnswer, setYourAnswer] = useState("");
  const [correct, setCorrect] = useState();

  const question = quizData[count].q;
  const items = quizData[count].c;
  const comment = quizData[count].m;

  const judge = (item) => {
    setYourAnswer(item);
    if (item === items[0]) {
      setCorrect(true);
    } else {
      setCorrect(false);
    }
  };

  console.log(yourAnswer + "=yourAnswerだよ");
  // console.log(correct + "=correctだよ");
  console.log(maxCount + "=maxCountだよ");
  console.log(count + "=countだよ");
  console.log(last + "=lastだよ");

  return (
    <Container>
      <Question>{question}</Question>
      <Choices
        items={items}
        judge={judge}
        yourAnswer={yourAnswer}
        correct={correct}
      />
      <Comment>{comment}</Comment>
      <Btn btnClick={btnClick} yourAnswer={yourAnswer} last={last}>
        Next{count}/{maxCount}
      </Btn>
    </Container>
  );
}

export default App;
