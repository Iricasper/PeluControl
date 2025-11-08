import { useEffect, useEffectEvent, useState } from 'react'
import clientesIniciales from './clientes.js'
import CampoBúsqueda from "./CampoBúsqueda.jsx"
import MostrarLista from "./MostrarLista.jsx"
import SinResultados from './SinResultados.jsx'
import Paginacion from './Paginacion.jsx'
import SelectorPaginacion from './SelectorPaginacion.jsx'

function ListaClientes() {
  
  const [lista, setLista] = useState(clientesIniciales) // Lista de clientes inicial
  const [listaPaginada, setListaPaginada] = useState(clientesIniciales)
  const [offset, setOffset] = useState(0) // Aquí cargaremos los offsets definidos en Paginacion, para poder mostrarlos acordemente
  const [clientesPerPage, setClientesPerPage] = useState(5) // Hay que meterle un checkbox

  // FILTRO 
  // Lógica del filtro, lo que introduces en la caja de texto es el parámetro para filtrar la lista de objetos
  const filtrar = (filtro) => {
    let listaFiltrada = clientesIniciales.filter(cliente =>
      cliente.nombre.toLowerCase().includes(filtro.toLowerCase()) ||
      cliente.telefono.includes(filtro))
      setLista(listaFiltrada)
      console.log(listaFiltrada)
      setOffset(0) // Al filtrar siempre volvemos a la primera página
  }


  const onPaginate = useEffectEvent(() => {
    const currentClientes = lista.slice(offset, (offset + clientesPerPage))
    console.log("currentClientes", {currentClientes})
    console.log("lista", {lista})
    setListaPaginada(currentClientes)
  })
  
  useEffect (() => {
    console.log(offset)
    onPaginate()
  }
  , [offset, clientesPerPage, lista])
  
  return (
    <div>
      <h3>Lista de clientes</h3>
      <CampoBúsqueda onChange={(texto) => filtrar(texto.target.value)}/> 
      {lista.length > 0 ?
        <MostrarLista lista={listaPaginada} /> : 
        <SinResultados />}
        {(clientesPerPage<lista.length) && <Paginacion lista={lista} offset={offset} setOffset={setOffset} clientesPerPage={clientesPerPage} />}
        <SelectorPaginacion onChange={(num) => setClientesPerPage(parseInt(num.target.value))}/>
    </div>
  )
}

export default ListaClientes
