import React from 'react';
import FilterBtn from '../FilterBtn';

const Status = ({ setStatus, setPageNumber }) => {
  let status = ['Alive', 'Dead', 'Unknown'];

  return (
    <div className='accordion-item'>
      <h2 className='accordion-header'>
        <button
          className='accordion-button'
          type='button'
          data-bs-toggle='collapse'
          data-bs-target='#collapseThree'
          aria-expanded='true'
          aria-controls='collapseThree'>
          Estado
        </button>
      </h2>
      <div
        id='collapseThree'
        className='accordion-collapse collapse show'
        data-bs-parent='#accordionExample'>
        <div className='accordion-body d-flex flex-wrap gap-3'>
          {/* Renderizado de los botones de filtro para cada estado */}
          {status.map((items, index) => (
            <FilterBtn
              task={setStatus}
              setPageNumber={setPageNumber}
              key={index}
              name="status"
              index={index}
              items={items}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Status;