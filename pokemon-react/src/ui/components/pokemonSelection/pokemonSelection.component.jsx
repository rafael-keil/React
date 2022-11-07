import "./pokemonSelection.style.css";
import background from "../../assets/pokedex.png";
import { HealthBar, PokemonButton } from "..";
import { useGlobalPokedex } from "../../../context";
import { AtualizePokedex } from "../../../utils";
import { useEffect, useState } from "react";

export function PokemonSelection({ pokemonList, onClick }) {
  const [pokedex, setPokedex] = useGlobalPokedex();
  const [pokemonSearch, setPokemonSearch] = useState("");
  const [listFiltered, setListFiltered] = useState(pokemonList);

  useEffect(() => {
    if (!pokemonSearch || !"     ".includes(pokemonSearch)) {
      const newList = pokemonList.filter((pokemon) => {
        return (
          pokemon.name.toUpperCase().includes(pokemonSearch.toUpperCase()) ||
          pokemon.nick.toUpperCase().includes(pokemonSearch.toUpperCase())
        );
      });

      setListFiltered(newList);
    } else {
      setListFiltered(pokemonList);
    }
  }, [pokemonSearch, pokemonList]);

  function handleSubmit(pokemonId, nick) {
    const pokemonFind = pokedex.find(
      (pokemon) => pokemon.idPokedex === pokemonId
    );

    const newPokemon = {
      ...pokemonFind,
      nick: nick ? nick : pokemonFind.name,
    };

    setPokedex(AtualizePokedex(pokedex, newPokemon));
  }

  function handleChange(state) {
    setPokemonSearch(state.target.value);
  }

  return (
    <div
      className="pokemonSelection"
      style={{ backgroundImage: `url(${background})` }}
    >
      <form className="pokemonSelection--form">
        <input
          value={pokemonSearch}
          onChange={handleChange}
          className="pokemonSelection--input"
          name="search"
          autoComplete="off"
        />
      </form>
      <div className="pokemonSelection-all">
        {listFiltered
          .filter((pokemon) => pokemon.time === 0)
          .map((pokemon) => {
            return (
              <div
                key={pokemon.idPokedex}
                className="pokemonSelection--pokemon"
              >
                <HealthBar hp={pokemon.hp} />
                <PokemonButton
                  id={pokemon.idPokedex}
                  name={pokemon.nick}
                  image={pokemon.image}
                  onClick={onClick}
                  onSubmit={handleSubmit}
                />
              </div>
            );
          })}
      </div>
    </div>
  );
}
