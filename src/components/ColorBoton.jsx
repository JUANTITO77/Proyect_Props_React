import { useState } from 'react';
import '../styles/MyProps.css';

export const ColorBoton = () => {
    const [color,setColor]=useState('rgb(0,0,09')
    
  return (
    <div className='Container'>
        <h1>Color Boton</h1>
        <div className="botonesColor">
            <div className="red">
                <button><ion-icon name="caret-up-outline"></ion-icon></button>
                <button><ion-icon name="caret-down-outline"></ion-icon></button>
            </div>
            <div className="green">
                <button><ion-icon name="caret-up-outline"></ion-icon></button>
                <button><ion-icon name="caret-down-outline"></ion-icon></button>
            </div>
            <div className="blue">
                <button><ion-icon name="caret-up-outline"></ion-icon></button>
                <button><ion-icon name="caret-down-outline"></ion-icon></button>
            </div>
        </div>
    </div>
  )
}
