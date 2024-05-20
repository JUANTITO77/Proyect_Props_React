import { useState } from 'react'
import '../styles/MyProps.css'

export const EntradaBoton = () => {
    const [inpValue,setInpValue] = useState('');
    const [texto, setTexto] = useState('');

    const manejarCambio=(e)=>{
        setInpValue(e.target.value);
    }

    const Trasladar =()=>{
        setTexto(inpValue);

    }
  return (
    <div className='Container'>
        <h1>Entrada Boton</h1>
        <input type="text" placeholder='Ingrese su Texto' onChange={manejarCambio}/>
        <button onClick={Trasladar}>
            <ion-icon name="caret-down-outline"></ion-icon>
        </button>
        <div className="contenido">{texto}</div>
    </div>
  )
}
