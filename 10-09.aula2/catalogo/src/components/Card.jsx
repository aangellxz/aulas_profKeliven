
export default  function Card(
        {
        imagem,
        categoria,
        nome, 
        preco
    }
    
){
    return(
        <div>
            <h1 className="imagem" >{imagem}</h1>
            <h2 className="nome" >{nome}</h2>
            <h3 className="preco" >{preco}</h3>
        </div>
    )

}