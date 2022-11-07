import { useEffect, useState } from "react";
import { useGlobalId, useGlobalPokedex } from "../../../context";
import { AddToPokedex, AtualizePokedex } from "../../../utils";
import "./battle.style.css";
import { ButtonBattle } from "./components/buttonBattle.component";
import { PokemonBattle } from "./components/pokemonBattle.component";
import background from "../../assets/backgroundBattle.png";
import { useHistory, useLocation } from "react-router-dom";
import { PATH } from "../../../constants";

export function Battle() {
  const [pokedex, setGlobalPokedex] = useGlobalPokedex();
  const [currentId, setGlobalId] = useGlobalId();
  const location = useLocation();
  const { push } = useHistory();

  const [pokemonAly, setPokemonAly] = useState(location.state[0]);
  const [pokemonEnemy, setPokemonEnemy] = useState(location.state[1]);

  const [round, setRound] = useState(Math.floor(Math.random() * 2));
  const miss = Math.random() < 0.05;

  useEffect(() => {
    if (pokemonAly.hp <= 0) {
      setGlobalPokedex(AtualizePokedex(pokedex, pokemonAly));

      push(PATH.LOSE);
    }

    if (pokemonEnemy.hp <= 0) {
      setGlobalPokedex(AtualizePokedex(pokedex, pokemonAly));

      push(PATH.WIN);
    }

    if (round === 1) {
      const abilitie = Math.floor(
        Math.random() * pokemonEnemy.abilities.length
      );
      const damage = pokemonEnemy.abilities[abilitie].damage;
      const newPokemonAly = {
        ...pokemonAly,
        hp: miss ? pokemonAly.hp : Math.max(pokemonAly.hp - damage, 0),
      };

      setPokemonAly(newPokemonAly);
      setRound(0);
    }
  }, [round]);

  function handleAtack(damage) {
    const newPokemonEnemy = {
      ...pokemonEnemy,
      hp: miss ? pokemonEnemy.hp : Math.max(pokemonEnemy.hp - damage, 0),
    };

    setPokemonEnemy(newPokemonEnemy);
    setRound(1);
  }

  function handleRun() {
    const newPokemonAly = {
      ...pokemonAly,
      hp: Math.ceil(pokemonAly.hp / 2),
    };

    setGlobalPokedex(AtualizePokedex(pokedex, newPokemonAly));
    push(PATH.MENU);
  }

  async function handleCapture() {
    const captured = Math.random() > (pokemonEnemy.hp + 15) / 100;

    if (captured) {
      const newPokedex = await AddToPokedex(
        pokedex,
        pokemonEnemy.id,
        currentId
      );
      setGlobalPokedex(AtualizePokedex(newPokedex, pokemonAly));
      setGlobalId(currentId + 1);
      push(PATH.CAPTURE);
    } else {
      setRound(1);
    }
  }

  return (
    <div className={"battle"}>
      <div
        className="battle--figth"
        style={{ backgroundImage: `url(${background})` }}
      >
        <PokemonBattle
          hp={pokemonEnemy.hp}
          name={pokemonEnemy.name}
          sprite={pokemonEnemy.sprites.front}
          side="enemy"
        />
        <PokemonBattle
          hp={pokemonAly.hp}
          name={pokemonAly.name}
          sprite={pokemonAly.sprites.back}
          side="aly"
        />
      </div>
      <div className="battle--selection">
        <div className="battle--atack">
          {pokemonAly.abilities.map((abilitie) => {
            return (
              <ButtonBattle
                key={abilitie.name}
                returnExpected={abilitie.damage}
                text={`${abilitie.name} - ${abilitie.damage}`}
                onClick={handleAtack}
              />
            );
          })}
        </div>
        <div className="battle--options">
          <ButtonBattle returnExpected={""} text="Fugir" onClick={handleRun} />
          <ButtonBattle
            returnExpected={""}
            text="Capturar"
            onClick={handleCapture}
          />
        </div>
      </div>
    </div>
  );
}
