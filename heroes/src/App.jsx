import "./App.css";
import { Hero } from "./component";
import heroes from "./heroes.json";

function App() {
  const arrHeroes = heroes.reduce(
    (acum, hero) => [...acum, <Hero hero={hero} />],
    []
  );

  return (
    <div className="App--container">
      <h1 className="App--h1">Seleção de Heróis</h1>
      <div className="App--heroes">{arrHeroes}</div>
    </div>
  );
}

export default App;
