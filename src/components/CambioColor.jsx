import { useState } from 'react';
import '../styles/MyProps.css';

export const CambioColor = () => {

    const [color,setColor] = useState('');

    const Cambio=(e)=>{
        setColor(e.target.value);
    }

  return (
    <div className='Container' style={{background:color}}>
        <h1>Cambio Color</h1>
        <input type="text" placeholder='Ingrese su color'onChange={Cambio}/>

    </div>
  )
}
