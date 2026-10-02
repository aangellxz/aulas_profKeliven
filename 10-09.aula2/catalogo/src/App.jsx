import Header from "./components/Header"
import Card from "./components/Card"

function App() {

  const produtos = [
    {
      id: 1,
      nome: "Mouse Game RBG",
      preco: 149.90,
      imagem: "MOUSE",
      categoria: "Periféricos"
    },
      
    {
      id: 2,
      nome: "Teclado Mecânico",
      preco: 299.90,
      imagem: "TECLADO",
      categoria: "Periféricos"
    },
    {
      id: 3,
      nome: "Monitor Gamer",
      preco: 1199.90,
      imagem: "MONITOR",
      categoria: "Monitor"
    },
    {
      id: 4,
      nome: "Fone Gamer",
      preco: 119.90,
      imagem: "FONE",
      categoria: "Áudio"
    }
  ]
  return (
    <>
    <Header />
       <section className="grid-produtos">
          {
            produtos.map((produto) => {
              return(
                <Card
                  key = {produto.id}
                  nome = {produto.nome}
                  preco = {produto.preco}
                  categoria = {produto.categoria}
                  imagem = {produto.imagem} 
                >
                </Card>
              )
            })
          }
        </section>
    </>
  )
}

export default App
