import "./pokemonBattle.style.css";
import { HealthBar } from "../../../components";

export function PokemonBattle({ hp, name, sprite, side }) {
  return (
    <div className={`pokemonBattle pokemonBattle--${side}`}>
      <div className="pokemonBattle--text">
        <div className="pokemonBattle--hp">
          <HealthBar hp={hp} />
        </div>
        <p className="pokemonBattle--name">{name}</p>
      </div>
      <img className="pokemonBattle--img" src={sprite} alt="pokemon inimigo" />
    </div>
  );
}
