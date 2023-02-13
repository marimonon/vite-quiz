import { useCallback, useEffect, useMemo, useState } from "react";
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
import shuffle from "./util/shuffle";

const maxCount = quizData.length - 1;
const deadTime = 10000; // 時間制限3秒
const heroDamage = 40;
const enemyDamage = 35;

function App() {
  const [count, setCount] = useState(0);
  const [startTime, setStartTime] = useState(() => new Date());

  // 経過時間を習得する関数
  const getElapsedTime = useCallback(() => {
    const elapsedTime = new Date() - startTime;
    return elapsedTime / 1000;
  }, [startTime]);

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
  const [heroHp, setHeroHp] = useState(100);
  const [enemyHp, setEnemyHp] = useState(100);

  // start | answering | judged | result
  const [mode, setMode] = useState("start");

  const question = quizData[count].q;
  const items = quizData[count].c;
  const comment = quizData[count].m;
  const shuffledItems = useMemo(() => shuffle(quizData[count].c), [count]);

  const judge = (item) => {
    setYourAnswer(item);
    setMode("judged");
    if (item === items[0] && attack === "none") {
      setCorrect(true);
      setScore(score + 1);
      setAttack("hero");
      setEnemyHp(enemyHp - enemyDamage);
      if (enemyHp <= enemyDamage) {
        console.log("魔物をたおしたぞ！");
      }
    } else {
      setCorrect(false);
      setAttack("enemy");
      setHeroHp(heroHp - heroDamage);
      if (heroHp <= heroDamage) {
        console.log("やられたぁ");
        setMode("end");
      }
    }
  };

  const scoreClick = () => {
    setMode("result");
  };

  const reset = () => {
    setCount(0);
    setYourAnswer("");
    setScore(0);
    setEnemyHp(100);
    setHeroHp(100);
    setMode("start");
    setAttack("none");
  };

  useEffect(() => {
    if (mode === "answering") {
      const timerId = setTimeout(() => {
        setAttack("enemy");
        setHeroHp(heroHp - heroDamage);
        setYourAnswer(items[0]);
        setMode("judged");
        if (heroHp <= heroDamage) {
          console.log("やられたぁ");
          setMode("end");
        }
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
          <Battle attack={attack} heroHp={heroHp} enemyHp={enemyHp} />
          <Time
            getElapsedTime={getElapsedTime}
            running={mode === "answering"}
            deadTime={deadTime}
          />
          <Container>
            <Question>{question}</Question>
            <Choices
              items={shuffledItems}
              judge={judge}
              yourAnswer={yourAnswer}
              correct={correct}
              mode={mode}
              attack={attack}
            />
          </Container>
        </>
      )}
      <Container>
        {mode === "judged" && (
          <>
            <Comment>{comment}</Comment>
            {!(enemyHp <= 0) ? (
              <Btn onClick={btnClick}>Next</Btn>
            ) : (
              <Btn onClick={scoreClick}>スコア表示</Btn>
            )}
          </>
        )}
        {mode === "result" && (
          <Modal reset={reset}>
            ゲームクリア！<br></br> 全{count + 1}問題中 {score}問正解です！
          </Modal>
        )}
        {mode === "end" && (
          <>
            <Comment>{comment}</Comment>
            <p>ゲームオーバー</p>
            <Btn onClick={reset}>最初に戻る</Btn>
          </>
        )}
      </Container>
    </>
  );
}

export default App;
