import React from 'react';
import Gender from './Category/Gender';
import Species from './Category/Species';
import Status from './Category/Status';
import styles from './Filter.module.scss';

const Filters = ({ setStatus, setPageNumber, setGender, setSpecies }) => {

  // Función para borrar los filtros y recargar la página
  let clear = () => {
    setStatus("")
    setPageNumber("")
    setGender("")
    setSpecies("")
    window.location.reload(false);
  };

  return (
    <div className='col-lg-3 col-12 mb-5'>
      {/* Título de los filtros */}
      <div className={`${styles.filtrosTxt} text-center fw-bold mb-2`}>Filtros</div>

      {/* Enlace para borrar los filtros */}
      <div
        onClick={clear}
        style={{ cursor: 'pointer' }}
        className='text-center text-primary text-decoration-underline mb-4'
      >
        Borrar Filtros
      </div>

      {/* Contenedor de los filtros */}
      <div className='accordion' id='accordionExample'>
        <Status setStatus={setStatus} setPageNumber={setPageNumber} />
        <Species setSpecies={setSpecies} setPageNumber={setPageNumber}/>
        <Gender setGender={setGender} setPageNumber={setPageNumber} />
      </div>
    </div>
  );
};

export default Filters;