import React from 'react'

function SelectorPaginacion({ onChange }) {
  const valores = [5, 10, 15, 20]
  return (
    <div>
      <label htmlFor="numClientes">Tamaño de la lista: </label>
      <select name="numClientes" id="numClientes" onChange={onChange}>
        {valores.map((num, id) => {
          return (
          <option key={id} value={num}>{num}</option>
          )
        })}
      </select>
    </div>
  )
}

export default SelectorPaginacion
