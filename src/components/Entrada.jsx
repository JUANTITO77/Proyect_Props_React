import { useState } from 'react';
import '../styles/MyProps.css';


export const Entrada = () => {

    const [regi, setRegi] = useState('')

    const ManejarCambio=(e)=>{
        setRegi(e.target.value);
    }

  return (
    <div className="Container">
        <h1>Form Entrada</h1>
        <input type="text" placeholder="Ingrese su Texto" onChange={ManejarCambio}/>
        <div className="contenido">{regi}</div>
    </div>
  )
}
