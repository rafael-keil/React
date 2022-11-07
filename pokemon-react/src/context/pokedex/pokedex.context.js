import createGlobalState from "react-create-global-state";

const stringifyPokedex = localStorage.getItem("pokedex");
const pokedex = stringifyPokedex ? JSON.parse(stringifyPokedex) : [];

const [useGlobalPokedex, PokedexProvider] = createGlobalState(pokedex);

export { useGlobalPokedex, PokedexProvider };
