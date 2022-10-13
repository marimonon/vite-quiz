import { useState } from "react";
import Btn from "./components/Btn";
import Choices from "./components/Choices";
import Comment from "./components/Comment";
import Container from "./components/Container";
import Question from "./components/Question";
import quizData from "./util/quizData.json";

// console.log(quizData);

function App() {
  const [count, setCount] = useState(0);
  const onClick = () => setCount(count + 1);

  const question = quizData[count].q;
  const items = quizData[count].c;
  const comment = quizData[count].m;

  const judge = (item) => {
    console.log(item);
    if (item === items[0]) {
      console.log("correct!");
    }
  };

  return (
    <Container>
      <Question>{question}</Question>
      <Choices items={items} judge={judge} />
      <Comment>{comment}</Comment>
      <Btn onClick={onClick}>Next{count}</Btn>
    </Container>
  );
}

export default App;
