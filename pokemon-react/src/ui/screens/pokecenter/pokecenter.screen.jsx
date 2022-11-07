import "./pokecenter.style.css";
import {
  DefaultBackButton,
  PokemonSelection,
  PokemonButton,
} from "../../components";
import { useGlobalPokedex } from "../../../context";
import { AtualizePokedex } from "../../../utils/atualizaPokedex";
import { useState } from "react";
import { useEffect } from "react/cjs/react.development";
import { PATH } from "../../../constants";

export function Pokecenter() {
  const [pokedex, setGlobalPokedex] = useGlobalPokedex();
  const [pokecenter, setPokecenter] = useState();

  useEffect(() => {
    const newPokecenter = pokedex.filter((pokemon) => pokemon.time > 0);

    setPokecenter(newPokecenter);
  }, [pokedex]);

  function handlePokecenter(pokemonId) {
    const pokemonHeal = pokedex.find(
      (pokemon) => pokemon.idPokedex === pokemonId
    );
    if (pokemonHeal.time < Date.now()) {
      const pokemonNew = {
        ...pokemonHeal,
        hp: 100,
        time: 0,
      };
      setGlobalPokedex(AtualizePokedex(pokedex, pokemonNew));
    }
  }

  function handlePokedex(pokemonId) {
    if (pokecenter.length < 6) {
      const pokemonRemove = pokedex.find(
        (pokemon) => pokemon.idPokedex === pokemonId
      );

      const pokemonHeal = {
        ...pokemonRemove,
        time: Date.now() + (100 - pokemonRemove.hp) * 5000,
      };

      setGlobalPokedex(AtualizePokedex(pokedex, pokemonHeal));
    }
  }

  return (
    <div className="pokecenter">
      <DefaultBackButton path={PATH.MENU} />
      <div className="pokecenter--info">
        <h1 className="pokecenter--title">Centro Pokemon</h1>
        <h1 className="pokecenter--title">Pokemons curando (max: 6):</h1>
        <div className="pokecenter--pokemons">
          {pokecenter?.map((pokemon) => {
            return (
              <PokemonButton
                key={pokemon.idPokedex}
                id={pokemon.idPokedex}
                name={pokemon.nick}
                image={pokemon.image}
                onClick={handlePokecenter}
                disabled={true}
              />
            );
          })}
        </div>
      </div>
      <PokemonSelection
        pokemonList={pokedex.filter((pokemon) => pokemon.hp < 100)}
        onClick={handlePokedex}
      />
    </div>
  );
}
