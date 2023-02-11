import { useEffect, useState } from "react";
import Battle from "./components/Battle";
import Btn from "./components/Btn";
import Choices from "./components/Choices";
import Comment from "./components/Comment";
import Container from "./components/Container";
import Modal from "./components/Modal";
import Question from "./components/Question";
import Start from "./components/Start";
import Time from "./components/Time";
import quizData from "./util/quizData.json";

const maxCount = quizData.length - 1;
const deadTime = 3000; // 時間制限3秒

function App() {
  const [count, setCount] = useState(0);
  const last = count === maxCount;
  const [startTime, setStartTime] = useState(() => new Date());

  // 経過時間を習得する関数
  const getElapsedTime = () => {
    const elapsedTime = new Date() - startTime;
    return elapsedTime / 1000;
  };

  const startClick = () => {
    setMode("answering");
    setStartTime(new Date());
  };

  const btnClick = () => {
    setCount(count + 1);
    setYourAnswer("");
    setMode("answering");
    setAttack("none");
    setStartTime(new Date());
  };

  const [yourAnswer, setYourAnswer] = useState("");
  const [correct, setCorrect] = useState();
  const [score, setScore] = useState(0);
  const [attack, setAttack] = useState("none");

  // start | answering | judged | result
  const [mode, setMode] = useState("start");

  const question = quizData[count].q;
  const items = quizData[count].c;
  const comment = quizData[count].m;

  const judge = (item) => {
    setYourAnswer(item);
    setMode("judged");
    if (item === items[0] && attack === "none") {
      setCorrect(true);
      setScore(score + 1);
      setAttack("hero");
    } else {
      setCorrect(false);
      setAttack("enemy");
    }
  };

  const scoreClick = () => {
    setMode("result");
  };

  const reset = () => {
    setCount(0);
    setYourAnswer("");
    setScore(0);
    setMode("start");
    setAttack("none");
  };

  useEffect(() => {
    if (mode === "answering") {
      const timerId = setTimeout(() => {
        alert("時間切れです");
        setAttack("enemy");
      }, deadTime);
      return () => clearTimeout(timerId);
    }
  }, [mode]);

  return (
    <>
      {mode === "start" ? (
        <>
          <Container>
            <Start>↓下のボタンを押してスタート</Start>
            <Btn onClick={startClick}>Start</Btn>
          </Container>
        </>
      ) : (
        <>
          <Battle correct={correct} />
          <Time
            getElapsedTime={getElapsedTime}
            running={mode === "answering"}
            deadTime={deadTime}
          />
          <Container>
            <Question>{question}</Question>
            <Choices
              items={items}
              judge={judge}
              yourAnswer={yourAnswer}
              correct={correct}
              mode={mode}
            />
          </Container>
        </>
      )}
      <Container>
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
    </>
  );
}

export default App;
