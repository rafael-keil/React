import "./figtherSelection.style.css";
import { FigtherList, SelectedFigther } from "../../components";
import FIGTHERS from "../../../constants/figthers.json";
import { useState } from "react";

export function FigtherSelection() {
  const [selected, setSelected] = useState({
    playerOne: null,
    playerTwo: null,
  });
  const { playerOne, playerTwo } = selected;

  function handleRemove(player) {
    setSelected({ ...selected, [player]: null });
  }

  function handleSelect(id) {
    const playerSelected = FIGTHERS.find((figther) => figther.id === id);

    if (!playerOne) {
      setSelected({ ...selected, playerOne: playerSelected });
    } else {
      setSelected({ ...selected, playerTwo: playerSelected });
    }
  }

  return (
    <>
      <h1 className="figtherSelection--titulo">CHOSE YOUR FIGTHER</h1>

      <div className="figtherSelection">
        <div className="figtherSelection--left">
          {!!playerOne && (
            <SelectedFigther
              name={playerOne.nome}
              image={playerOne.imagemDetalhe}
              player={"playerOne"}
              onRemove={handleRemove}
            />
          )}
        </div>

        <div className="figtherSelection--figthers">
          <FigtherList
            playerOne={playerOne}
            playerTwo={playerTwo}
            onSelect={handleSelect}
          />
        </div>

        <div className="figtherSelection--rigth">
          {!!playerTwo && (
            <SelectedFigther
              name={playerTwo.nome}
              image={playerTwo.imagemDetalhe}
              player={"playerTwo"}
              onRemove={handleRemove}
            />
          )}
        </div>
      </div>
    </>
  );
}
