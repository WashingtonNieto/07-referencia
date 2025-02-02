import React, { useRef } from 'react'

export const Formulario = () => {

  const nombreInput = useRef();
  const apellidoInput = useRef();
  const emailInput = useRef();
  const miCaja = useRef();

  const mostrar = e => {
    e.preventDefault();

    console.log(nombreInput.current.value);
    console.log(apellidoInput.current.value);
    console.log(emailInput.current.value);

    //mi caja
    let { current: caja} = miCaja;
    caja.classList.add("fondoVerde");
    caja.innerHTML = "Formulario Enviado!"
  }


  return (
    <div>
      <h1>Formulario</h1>

      <div ref={miCaja} className='miCaja'>
        <h2>Pruebas con useRef</h2>
      </div>

      <form onSubmit={mostrar} >
        <input type='text' placeholder='Nombre' ref={nombreInput}/> <br/>
        <input type='text' placeholder='Apellido' ref={apellidoInput}/><br/>
        <input type='text' placeholder='Email' ref={emailInput}/><br/>
        <textarea type='text' placeholder='Motivo de contacto'/><br/>
        <input type='submit' value='Enviar'/>
      </form>

    </div>
  )
}
