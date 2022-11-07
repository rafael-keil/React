import createGlobalState from "react-create-global-state";

const stringifyCurrentId = localStorage.getItem("currentId");
const currentId = stringifyCurrentId ? parseInt(stringifyCurrentId) : 1;

const [useGlobalId, IdProvider] = createGlobalState(currentId);

export { useGlobalId, IdProvider };
