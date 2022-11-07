import "./index.css"

export function Title({ nome, idade, cor = "red", carregando}) {


    if(carregando){
        return (
            <h1>carregando...</h1>
        )
    }

    return (
        <>
            <h1 className={`tittle--${cor}`} > Bem vindo ao react, {nome}</h1>
            <p>Voce tem {idade} anos</p>
        </>
    )
}