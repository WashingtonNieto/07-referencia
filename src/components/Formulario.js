import React, { useRef } from 'react'

export const Formulario = () => {

  const nombre = useRef("Washington");

  const mostrar = e => {
    e.preventDefault();

    console.log(nombre);

  }


  return (
    <div>
      <h1>Formulario</h1>

      <form className='contact' >
        <input type='text' placeholder='Nombre'/> <br/>
        <input type='text' placeholder='Apellido'/><br/>
        <input type='text' placeholder='Email'/><br/>
        <textarea type='text' placeholder='Motivo de contacto'/><br/>
        <input type='submit' value='Enviar'/>
      </form>

    </div>
  )
}
