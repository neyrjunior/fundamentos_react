import { useState } from "react"
import Card from "./components/Card/Card"
import Contador from "./components/Contador/Contador"
import Task from "./components/Task/Task"

function App() {
  const[logged, setLogged] = useState(false);
  return (
    <>
    {
      logged ? (
        
          <h1>Seja bem vindo <button onClick={() => setLogged(false)}>sair</button></h1>
                ): (
          <button onClick={() => setLogged(true)}>logar</button>
                )
        
    }
    <Card titulo="JavaScript" descricao="Biblioteca do JavaScript"/>
    <Contador/>
    <Task/>
    </>
  )
}

export default App
