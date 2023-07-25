import React, { useState, useEffect } from 'react';
import ReactPaginate from 'react-paginate';

const Pagination = ({ info, pageNumber, setPageNumber }) => {
  // Estado para almacenar el ancho de la ventana
  let [width, setWidth] = useState(window.innerWidth);

  // Función para actualizar el ancho de la ventana
  let updateDimension = () => {
    setWidth(window.innerWidth);
  };

  useEffect(() => {
    // Escuchando el cambio de tamaño de la ventana
    window.addEventListener('resize', updateDimension);

    // Limpiando el listener cuando el componente se desmonta
    return () => window.removeEventListener('resize', updateDimension);
  }, []);

  return (
    <>
      <style jsx>
        {`
      @media (max-width: 768px){
        .next, 
        .prev{
          display: none;
        }
        .pagination{
          --bs-pagination-font-size: 14px;
        }
      }
      `}
      </style>
      <ReactPaginate
        className='pagination justify-content-center gap-4 my-4'
        forcePage={pageNumber === 1 ? 0 : pageNumber - 1}
        nextLabel='Siguiente'
        previousLabel='Anterior'
        nextClassName='btn btn-primary next'
        previousClassName='btn btn-primary prev'
        pageClassName='page-item'
        pageLinkClassName='page-link'
        marginPagesDisplayed={width < 576 ? 1 : 2}
        pageRangeDisplayed={width < 576 ? 1 : 2}
        activeClassName='active'
        onPageChange={(data) => {
          setPageNumber(data.selected + 1);
        }}
        pageCount={info?.pages} />
    </>
  );
};

export default Pagination;