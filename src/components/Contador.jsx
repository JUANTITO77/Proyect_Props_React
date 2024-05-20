import { useState } from 'react';
import '../styles/MyProps.css';


export const Contador = () => {
    const [count, setCount] = useState(0);

    const suma=()=>{
        setCount(count+1);
    }
    const resta=()=>{
        setCount(count-1);
    }
    const Reiniciar=()=>{
        setCount(0);
    }


  return (
    <div className='Container'>
        <h1>Contador</h1>
        <span>{count}</span>
        <div className="botones">
            <button onClick={resta}>-</button>
            <button onClick={Reiniciar}>0</button>
            <button onClick={suma}>+</button>
        </div>
    </div>
  )
}
