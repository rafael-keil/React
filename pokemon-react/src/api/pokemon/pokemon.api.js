import { useHttp } from "../_base/use-http";

export function usePokemonApi() {
  const http = useHttp(
    "https://gustavobuttenbender.github.io/gus.github/poke/"
  );

  function getStarters() {
    return http.get("initial-pokemons.json");
  }

  function getAll() {
    return http.get("pokemons.json");
  }

  return {
    getStarters,
    getAll,
  };
}
