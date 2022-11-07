import {
  DefaultBackButton,
  PokemonSelection,
  PokemonButton,
} from "../../components";
import "./battleSelection.style.css";
import { useGlobalPokedex } from "../../../context";
import { useEffect, useState } from "react";
import { usePokemonApi } from "../../../api";
import { PATH } from "../../../constants";
import { useHistory } from "react-router-dom";

export function BattleSelection() {
  const [pokedex] = useGlobalPokedex();
  const [enemyPokemon, setEnemyPokemon] = useState();
  const pokemonApi = usePokemonApi();
  const { push } = useHistory();

  useEffect(() => {
    async function getPokemons() {
      const pokemons = await pokemonApi.getAll();
      const newPokemon = pokemons[Math.floor(Math.random() * pokemons.length)];

      const newEnemy = {
        ...newPokemon,
        hp: 100,
      };
      setEnemyPokemon(newEnemy);
    }

    getPokemons();
  }, []);

  function handleClick(pokemonId) {
    const pokemonChosen = pokedex.find(
      (pokemon) => pokemon.idPokedex === pokemonId
    );

    push({
      pathname: PATH.BATTLE,
      state: [pokemonChosen, enemyPokemon],
    });
  }

  return (
    <div className="battleSelection">
      <DefaultBackButton path={PATH.MENU} />
      <div className="battleSelection--info">
        <h1 className="battleSelection--title">
          O pokemon inimigo sorteado foi:
        </h1>
        {enemyPokemon ? (
          <PokemonButton
            id={enemyPokemon.id}
            name={enemyPokemon.name}
            image={enemyPokemon.image}
            disabled={true}
          />
        ) : null}
        <h1 className="battleSelection--title">Selecione o seu pokemon!</h1>
      </div>
      <PokemonSelection
        pokemonList={pokedex.filter((pokemon) => pokemon.hp > 0)}
        onClick={handleClick}
      />
    </div>
  );
}
