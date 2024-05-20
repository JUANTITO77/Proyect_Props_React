import '../styles/MyProps.css';

export const MyProps = (props) => {
  return (
    <div className='Container'>
        <h1>{props.Nombre}</h1>
        <input type="text" placeholder='Mi Nombre Completo'/>
        <input type="text" placeholder='Mi Apellido Completo'/>
        <button>REGISTRAR</button>
    </div>
  )
}




























