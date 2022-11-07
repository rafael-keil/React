import "./selectedFigther.style.css";

export function SelectedFigther({ name, image, player, onRemove }) {
  function handleClick() {
    onRemove(player);
  }

  return (
    <div className={`selectedFigther selectedFigther--${player}`}>
      <h2 className="selectedFigther--name">{name}</h2>
      <img
        className={`selectedFigther--img selectedFigther--img--${player}`}
        src={image}
        alt="lutador selecionado"
      />
      <button className="selectedFigther--remove" onClick={handleClick}>
        Remover
      </button>
    </div>
  );
}
