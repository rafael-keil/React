import "./buttonBattle.style.css";

export function ButtonBattle({ returnExpected, text, onClick }) {
  function handleClick() {
    returnExpected === "" ? onClick() : onClick(returnExpected);
  }

  return (
    <button className="buttonBattle" onClick={handleClick}>
      <p className="buttonBattle--arrow">&gt;</p>
      <p>{text}</p>
    </button>
  );
}
