import { usePokemonApi } from "../api";

export async function AddToPokedex(pokedex, pokemonId, newID) {
  const pokemons = await usePokemonApi().getAll();
  const pokemonFind = pokemons.find((pokemon) => pokemon.id === pokemonId);

  const newPokemon = {
    ...pokemonFind,
    hp: 100,
    idPokedex: newID,
    time: 0,
    nick: pokemonFind.name,
  };

  return [...pokedex, newPokemon];
}

export function AtualizePokedex(pokedex, pokemonNew) {
  return pokedex.map((pokemon) => {
    if (pokemon.idPokedex === pokemonNew.idPokedex) {
      return pokemonNew;
    } else {
      return pokemon;
    }
  });
}

export function RemovePokedex(pokedex, pokemonRemove) {
  return pokedex.filter(
    (pokemon) => pokemon.idPokedex !== pokemonRemove.idPokedex
  );
}
