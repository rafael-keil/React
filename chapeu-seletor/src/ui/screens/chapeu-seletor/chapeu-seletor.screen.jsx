import "./index.css";
import alunos from "../../../alunos.json";
import { ListaCasa } from "../../components";
import { useState } from "react";

function filterCasa(alunosOld, casa) {
  return alunosOld
    .filter((aluno) => aluno.casa === casa)
    .map((aluno) => aluno.nome);
}

function reordenaAlunos() {
  return alunos.map((aluno) => {
    return { nome: aluno, casa: Math.floor(Math.random() * 4) };
  });
}

export function ChapeuSeletor() {
  const [ordemAlunos, setOrdemAlunos] = useState(reordenaAlunos());

  function handleClick() {
    setOrdemAlunos(reordenaAlunos());
  }

  function handleAluno(aluno) {
    const alunosAux = ordemAlunos.map((alunoMap) => {
      if (alunoMap.nome === aluno) {
        let aux = Math.floor(Math.random() * 4);
        while (aux === alunoMap.casa) {
          aux = Math.floor(Math.random() * 4);
        }
        return { nome: aluno, casa: aux };
      } else {
        return { ...alunoMap };
      }
    });
    setOrdemAlunos(alunosAux);
  }

  const gryffindor = filterCasa(ordemAlunos, 0);
  const slytherin = filterCasa(ordemAlunos, 1);
  const hufflepuff = filterCasa(ordemAlunos, 2);
  const ravenclaw = filterCasa(ordemAlunos, 3);

  return (
    <div className="chapeuSeletor">
      <h1 className="chapeuSeletor--titulo">Sorting Hat</h1>
      <div className="chapeuSeletor--casas">
        <ListaCasa alunos={gryffindor} casa="GRYFFINDOR" button={handleAluno} />
        <ListaCasa alunos={slytherin} casa="SLYTRHERIN" button={handleAluno} />
        <ListaCasa alunos={hufflepuff} casa="HUFFLEPUFF" button={handleAluno} />
        <ListaCasa alunos={ravenclaw} casa="RAVENCLAW" button={handleAluno} />
      </div>
      <button
        onClick={handleClick}
        className="chapeuSeletor--botao"
        style={{
          backgroundImage:
            "url(https://cdn.icon-icons.com/icons2/1352/PNG/512/if-06-harry-potter-colour-sorting-hat-2730319_88134.png)",
        }}
      />
    </div>
  );
}
