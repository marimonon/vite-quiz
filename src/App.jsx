import Btn from "./components/Btn";
import Choices from "./components/Choices";
import Comment from "./components/Comment";
import Container from "./components/Container";
import Question from "./components/Question";

const items = ["カスピ海", "カリブ海", "バナナ"];
function App() {
  return (
    <Container>
      <Question>世界で一番大きな湖は？</Question>
      <Choices items={items} />
      <Comment>
        世界で一番大きな湖はカスピ海。海水です。ちなみに一番大きい炭水の湖はバイカル湖です。
      </Comment>
      <Btn>Next</Btn>
    </Container>
  );
}

export default App;
