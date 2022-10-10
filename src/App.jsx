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
  return (
    <Container>
      <Question>{question}</Question>
      <Choices items={items} />
      <Comment>{comment}</Comment>
      <Btn>Next</Btn>
    </Container>
  );
}

export default App;
