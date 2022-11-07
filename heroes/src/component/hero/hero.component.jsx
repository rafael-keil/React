import "./index.css";

export function Hero({ hero }) {
  const color = hero.color || "bg-black";
  const image =
    hero.image ||
    "https://cdn1.iconfinder.com/data/icons/avengers-1/512/avangers_icon003-512.png";
  const name = hero.name || "Heróis";
  const description = hero.description || "Nós temos o Hulk";
  const background =
    hero.background ||
    "https://www.magazine-hd.com/apps/wp/wp-content/uploads/2017/02/infinitywar.jpg";

  return (
    <div className={`Hero--box Hero--${color}`}>
      <img src={image} alt="Icone do herói" className="Hero--img" />
      <div>
        <h3 className="Hero--name">{name}</h3>
        <p className="Hero--desc">{description}</p>
      </div>
      <img
        src={background}
        alt="imagem de fundo"
        className="Hero--background"
      />
    </div>
  );
}
