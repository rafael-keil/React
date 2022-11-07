import "./App.css";
import { Title, Card } from "./components";

function App() {
  return (
    <>
      <Title nome="rafael" idade="19" cor="blue" carregando={true} />
      <Card>
        <p>Teste</p>
      </Card>
    </>
  );
}

export default App;
