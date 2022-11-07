import "./healthBar.style.css";

export function HealthBar({ hp }) {
  return <progress className="healthBar" value={hp} max="100"></progress>;
}
