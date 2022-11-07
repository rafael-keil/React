import FIGTHERS from "../../../constants/figthers.json";
import { FigtherIcon } from "..";

export function FigtherList({ playerOne, playerTwo, onSelect }) {
  return FIGTHERS.map((figther) => {
    let isSelected = false;
    if (
      (!!playerOne && !!playerTwo) ||
      (!!playerOne && figther.id === playerOne.id) ||
      (!!playerTwo && figther.id === playerTwo.id)
    ) {
      isSelected = true;
    }
    return (
      <FigtherIcon
        key={figther.id}
        id={figther.id}
        image={figther.imagemListagem}
        onSelect={onSelect}
        isSelected={isSelected}
      />
    );
  });
}
