import React from 'react'

function Ordenar({onClickNombre, onClickTelefono}) {
  return (
    <div>
      <button name="ordenarNombre" onClick={onClickNombre}>Nombre</button>
      <button name="ordenarTelefono" onClick={onClickTelefono}>Teléfono</button>
    </div>
  )
}

export default Ordenar
