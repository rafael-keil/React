import { PokemonButton } from "../../components";
import "./startPokemon.style.css";
import { usePokemonApi } from "../../../api";
import { useState, useEffect } from "react";
import { useGlobalId, useGlobalPokedex } from "../../../context";
import { AddToPokedex } from "../../../utils/atualizaPokedex";
import { useHistory } from "react-router-dom";
import { PATH } from "../../../constants";

export function StartPokemon() {
  const [pokemons, setPokemon] = useState([]);
  const [currentId, setGlobalId] = useGlobalId();
  const [pokedex, setGlobalPokedex] = useGlobalPokedex();
  const { push } = useHistory();

  const pokemonApi = usePokemonApi();

  useEffect(() => {
    async function getPokemon() {
      const pokemonsGet = await pokemonApi.getStarters();

      setPokemon(pokemonsGet);
    }

    getPokemon();
  }, []);

  async function handleSelectStart(pokemonId) {
    const newPokemons = await AddToPokedex(pokedex, pokemonId, currentId);
    setGlobalPokedex(newPokemons);
    setGlobalId(currentId + 1);

    push(PATH.MENU);
  }

  return (
    <div className="startPokemon">
      <h1 className="startPokemon--title">Pokemons Iniciais</h1>
      <h2 className="startPokemon--subtitle">Selecione um pokemon!</h2>
      <div className="startPokemon--selections">
        {pokemons.map((pokemon) => (
          <PokemonButton
            key={pokemon.id}
            id={pokemon.id}
            name={pokemon.name}
            image={pokemon.image}
            onClick={handleSelectStart}
          />
        ))}
      </div>
    </div>
  );
}
