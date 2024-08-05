import { useEffect, useState } from 'react'
import './Task.css'

function Task() {

const[finalizada, setFinalizada] = useState<boolean>(false);
const[tarefa, setTarefa] = useState<string>("tarefa pendente");

useEffect(() => {
  if(finalizada){
    setTarefa("tarefa finalizada")
  }
}, [finalizada])


  return (
    <div className="container">
        <h1>Tarefa</h1>
        <h3>Status: {tarefa}</h3>
        <button onClick={() => setFinalizada(true)}>Conclua a Tarefa</button>
    </div>
  )
}

export default Task