import { Link } from "react-router-dom";
import "./defaultButton.style.css";

export function DefaultButton({ text, path }) {
  return (
    <Link to={path}>
      <button className="defaultButton">{text}</button>
    </Link>
  );
}

export function DefaultBackButton({ path }) {
  return (
    <div className="backButton">
      <DefaultButton text="Voltar" path={path} />
    </div>
  );
}
