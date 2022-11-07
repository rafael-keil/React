import { useState } from "react";
import "./pokemonButton.style.css";

export function PokemonButton({
  id,
  name,
  image,
  onClick,
  onSubmit,
  disabled,
}) {
  const [nick, setNick] = useState(name);

  function handleClick() {
    onClick(id);
  }

  function handleChange(event) {
    setNick(event.target.value);
  }

  function handleSubmit() {
    onSubmit(id, nick);
  }

  return (
    <div className="pokemonButton">
      <button
        className="pokemonButton--button"
        onClick={handleClick}
        style={{ backgroundImage: `url(${image})` }}
      />
      <form onSubmit={handleSubmit} className="pokemonButton--form">
        <input
          value={nick}
          onChange={handleChange}
          className="pokemonButton--name"
          name="name"
          autoComplete="off"
          disabled={disabled}
        />
      </form>
    </div>
  );
}

PokemonButton.defaultProps = {
  onClick: () => null,
  onSubmit: () => null,
  disabled: false,
};
