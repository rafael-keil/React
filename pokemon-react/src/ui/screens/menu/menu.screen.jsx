import "./menu.style.css";
import { DefaultButton } from "../../components";
import { PATH } from "../../../constants";
import { useGlobalPokedex } from "../../../context";
import { Redirect } from "react-router";

export function Menu() {
  const [pokedex] = useGlobalPokedex();

  if (!pokedex.length) {
    return (
      <>
        <Redirect to={PATH.START} />
      </>
    );
  }

  return (
    <div className="menu">
      <h1 className="menu--title">Menu:</h1>
      <div className="menu--items">
        <DefaultButton text="Pokedex" path={PATH.POKEDEX} />
        <DefaultButton text="Batalha" path={PATH.BATTLESELECTION} />
        <DefaultButton text="Centro Pokemon" path={PATH.POKECENTER} />
      </div>
    </div>
  );
}
