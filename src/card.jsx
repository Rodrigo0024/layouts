function Card({nome, imagem, texto}) {

    return(
        <div>
            <h5>{nome}</h5>
            <img src={imagem} className="imagem-grande" ></img>
            <p>{texto}</p>
        </div>
    )

}
export default Card;