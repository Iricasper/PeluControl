import React from 'react'
import ReactPaginate from 'react-paginate'

function Paginacion({lista, offset, setOffset, clientesPerPage}) {
  const endOffset = offset + clientesPerPage
  console.log(`Cargando clientes desde el ${offset} hasta el ${endOffset}`)
  const pageCount = Math.ceil(lista.length / clientesPerPage) // Número de páginas totales
  console.log({pageCount})

  // HANDLEPAGECLICK
  const handlePageClick = (event) => {
    const newOffset = (event.selected * clientesPerPage) % lista.length
    console.log(`El usuario ha solicitado la página número ${event.selected + 1}, cuyo offset es ${newOffset}`)
    setOffset(newOffset)

  }
  return (
    <div className='paginacion'>
      <ReactPaginate 
        previousLabel={"Anterior"}
        previousClassName={offset==0 && "hidden"}
        nextLabel={"Siguiente"}
        nextClassName={endOffset>=lista.length && "hidden"}
        breakLabel={"..."}
        pageCount={pageCount}
        marginPagesDisplayed={2}
        pageRangeDisplayed={3}
        onPageChange={handlePageClick}
      />
    </div>
  )
}

export default Paginacion
