import { useState } from 'react';
import './Contador.css'

function Contador() {

//let valor: number = 0;

const[valor, setValor] = useState(0);

function SomarMaisUm() {
  setValor(valor + 1);
}

  return (
    <div className="container">
        <p>O valor é: {valor}</p>
        <button onClick={SomarMaisUm}>Adicionar +1</button>
    </div>
  )
}

export default Contador