import { useState } from "react";
import Btn from "./components/Btn";
import Choices from "./components/Choices";
import Comment from "./components/Comment";
import Container from "./components/Container";
import Question from "./components/Question";
import quizData from "./util/quizData.json";

console.log(quizData);
const question = quizData[0].q;
const items = quizData[0].c;
const comment = quizData[0].m;

function App() {
  const [count, setCount] = useState(0);
  const onClick = () => setCount(count + 1);

  return (
    <Container>
      <Question>{question}</Question>
      <Choices items={items} />
      <Comment>{comment}</Comment>
      <Btn onClick={onClick}>Next{count}</Btn>
    </Container>
  );
}

export default App;
