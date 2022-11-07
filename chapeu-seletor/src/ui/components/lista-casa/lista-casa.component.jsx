import "./index.css";

function AlunosList({ alunos, button }) {
  if (alunos.length) {
    return alunos.map((aluno) => (
      <button
        onClick={() => button(aluno)}
        key={aluno}
        className="listaCasa--aluno"
      >
        {aluno}
        <img
          className="listaCasa--img"
          src="https://cdn.icon-icons.com/icons2/1352/PNG/512/if-06-harry-potter-colour-sorting-hat-2730319_88134.png"
          alt="chapeu do aluno"
        />
      </button>
    ));
  } else {
    return (
      <p className="listaCasa--aluno listaCasa--vazio">
        Nenhum aluno nesta casa.
      </p>
    );
  }
}

export function ListaCasa({ alunos, casa, button }) {
  return (
    <div className="listaCasa">
      <h2 className={`listaCasa--nome listaCasa--${casa}`}>{casa}</h2>
      <div className="listaCasa--alunos">
        <AlunosList alunos={alunos} button={button} />
      </div>
    </div>
  );
}
