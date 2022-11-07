import { PATH } from "../../../constants";
import { DefaultButton } from "../../components";
import "./endBattle.style.css";

export function EndBattle({ text }) {
  return (
    <div className="endBattle">
      <h1 className="endBattle--title">{text}</h1>
      <DefaultButton text="Voltar ao menu" path={PATH.MENU} />
    </div>
  );
}
