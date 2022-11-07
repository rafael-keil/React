import { DefaultBackButton, PokemonSelection } from "../../components";
import "./pokedex.style.css";
import { useGlobalPokedex } from "../../../context";
import { PATH } from "../../../constants";

export function Pokedex() {
  const [pokedex] = useGlobalPokedex();

  return (
    <div className="pokedex">
      <DefaultBackButton path={PATH.MENU} />
      <h1 className="pokedex--title">Pokedex</h1>
      <PokemonSelection pokemonList={pokedex} />
    </div>
  );
}
