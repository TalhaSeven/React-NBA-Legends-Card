import Container from "react-bootstrap/Container";
import "./App.css";
import CardContainer from "./Components/CardContainer";
import Header from "./Components/Header";

function App() {
  return (
    <Container className="text-center mt-4">
      <Header />
      <CardContainer />
    </Container>
  );
}
export default App;