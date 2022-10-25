import { useState } from "react";
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

function App() {
  const [count, setCount] = useState(0);
  const last = count === maxCount;

  const [timer, setTimer] = useState("15.00秒");
  const [startTime, setStartTime] = useState(0);

  // 15秒でカウントダウン
  const deadTime = 15000;

  // 現在の時間からスタートタイム時を引く
  const time = new Date(Date.now() - startTime);

  // カウント中の関数
  function timerTime() {
    // 秒部分を取り出す
    const timerDisplay = () => {
      const timerCount = deadTime - time;
      const second = String(timerCount.Seconds()).padStart(2, "0");
      const milli = String(timerCount.getMilliseconds()).padStart(1, "0");
      // タイマーの値をセット
      return (timerText = `${second}.${milli}秒`);
    };

    // timerの値で判定
    if (timer < 0) {
      // タイマー切れたら0秒表示
      setTimer("0.00秒");
    } else {
      // setTimer("wasshoi");
      timerDisplay();
      setTimer(timerText);
    }
    console.log(timer);
  }

  const startClick = () => {
    setMode("answering");
    setStartTime(Date.now());
    // 30m秒ごとに呼び出し
    setTimeout(() => {
      timerTime();
    }, 30);
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

  // const stopWatch = () => {
  //   if (mode === "start") {
  //     console.log(time + "初期");
  //     startTime = Date.now();
  //     console.log(startTime + "走り出し");
  //   } else if (mode === "answering") {
  //     endTime = Date.now();
  //     time = endTime - startTime;
  //     console.log(time + "カウント済み");
  //   } else if (mode === "judged") {
  //     time = 0;
  //     startTime = Date.now();
  //     endTime = 0;
  //     console.log(time);
  //   }
  // };

  const question = quizData[count].q;
  const items = quizData[count].c;
  const comment = quizData[count].m;

  const judge = (item) => {
    setYourAnswer(item);
    setMode("judged");
    console.log(timer);
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
    setMode("start");
  };

  return (
    <Container>
      {mode === "start" ? (
        <>
          <Start>↓下のボタンを押してスタート</Start>
          <Btn onClick={startClick}>Start</Btn>
        </>
      ) : (
        <>
          <Time>{timer}</Time>
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
