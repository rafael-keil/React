import { useEffect } from "react";
import "./App.css";
import { useGlobalId, useGlobalPokedex } from "./context";
import { ScreenSelection } from "./ui/components";

function App() {
  const [pokedex] = useGlobalPokedex();
  const [currentId] = useGlobalId();

  useEffect(() => {
    const pokedexJson = JSON.stringify(pokedex);
    localStorage.setItem("pokedex", pokedexJson);

    const currentIdJson = JSON.stringify(currentId);
    localStorage.setItem("currentId", currentIdJson);
  }, [pokedex, currentId]);

  return (
    <>
      <ScreenSelection />
    </>
  );
}

export default App;
