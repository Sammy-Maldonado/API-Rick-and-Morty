import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const CardDetails = () => {
  let { id } = useParams();
  let [fetchedData, updateFetchedData] = useState([]);
  let { name, image, location, origin, gender, species, status, type } = fetchedData;
  let api = `https://rickandmortyapi.com/api/character/${id}`;

  useEffect(() => {
    //Función asíncrona autoejecutable para realizar la llamada a la API
    (async function () {
      let data = await fetch(api)
        .then(res => res.json())
      updateFetchedData(data) //Actualizando el estado "FetchedData"
    })();
  }, [api]);

  return (
    <div className='container d-flex justify-content-center'>
      <div className='d-flex flex-column gap-3'>
        {/* Nombre del personaje */}
        <h1 className='text-center'>{name}</h1>
        {/* Imagen del personaje */}
        <img
          src={image}
          alt={name}
          className='img-fluid'
        />

        {/* Etiqueta de estado del personaje */}
        {(() => {
          if (status === 'Dead') {
            return <div className='badge bg-danger fs-5'>{status}</div>;
          } else if (status === 'Alive') {
            return <div className='badge bg-success fs-5'>{status}</div>;
          } else {
            return <div className='badge bg-secondary fs-5'>{status}</div>;
          }
        })()}

        <div className='content'>
          {/* Género del personaje */}
          <div className=''>
            <span className='fw-bold'>Genero : </span>
            {gender}
          </div>
          {/* Especie del personaje */}
          <div className=''>
            <span className='fw-bold'>Especie : </span>
            {species}
          </div>
          {/* Tipo */}
          <div className=''>
            <span className='fw-bold'>Tipo : </span>
            {type === '' ? 'Desconocido' : type}
          </div>
          {/* Localidad */}
          <div className=''>
            <span className='fw-bold'>Localidad : </span>
            {location?.name}
          </div>
          {/* Origen del personaje */}
          <div className=''>
            <span className='fw-bold'>Origen : </span>
            {origin?.name}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardDetails;