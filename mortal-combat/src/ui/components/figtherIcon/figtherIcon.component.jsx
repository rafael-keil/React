import "./figtherIcon.style.css";

export function FigtherIcon({ id, image, onSelect, isSelected }) {
  function handleClick() {
    onSelect(id);
  }
  return (
    <button
      onClick={handleClick}
      className={`figtherIcon ${isSelected}`}
      style={{ backgroundImage: `url(${image})` }}
      disabled={isSelected}
    ></button>
  );
}
