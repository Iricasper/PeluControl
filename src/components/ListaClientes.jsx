import React from "react"

function ListaClientes() {
  const clientesIniciales = [
    { id: 1, nombre: "Laura González", telefono: "644123123" },
    { id: 2, nombre: "Carlos Ruiz", telefono: "655321321" },
    { id: 3, nombre: "Marta Pérez", telefono: "699112233" },
  ]
  return (
    <div>
      <table border={1} width={"600"}>
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Teléfono</th>
          </tr>
        </thead>
        <tbody>
          {clientesIniciales.map((cliente) => (
            <tr key={cliente.id}>
              <td>{cliente.nombre}</td>
              <td>{cliente.telefono}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default ListaClientes
