import Btn from "./components/Btn";
import Choices from "./components/Choices";
import Comment from "./components/Comment";
import Container from "./components/Container";
import Question from "./components/Question";

function App() {
  return (
    <Container>
      <Question>問題文</Question>
      <Choices />
      <Comment>解説文</Comment>
      <Btn>わっしょい</Btn>
    </Container>
  );
}

export default App;
