import React, { useState } from "react"

function CampoBúsqueda() {
  const [busqueda, setBusqueda] = useState("")
  return (
    <div>
      <label htmlFor="buscar">Buscar: </label>
      <input
        type="text"
        id="buscar"
        name="buscar"
        placeholder={"Escribe aquí..."}
        onChange={(e) => setBusqueda(e.target.value)}
      ></input>
    </div>
  )
}

export default CampoBúsqueda
