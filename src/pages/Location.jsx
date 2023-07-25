import React, { useState, useEffect } from 'react';
import Cards from '../components/Cards/Cards';
import InputGroup from '../components/Filters/Category/InputGroup';

const Location = () => {
  let [id, setID] = useState(1);
  let [info, setInfo] = useState([]);
  let [results, setResults] = useState([]);
  let { name, type, dimension } = info;
  let api = `https://rickandmortyapi.com/api/location/${id}`;

  useEffect(() => {
    //Función asíncrona autoejecutable para realizar la llamada a la API
    (async function () {
      //Obteniendo los datos las Localidades en la API de rym
      let data = await fetch(api)
        .then((res) => res.json());
      setInfo(data); //Actualizando el estado "info"

      // Realizando múltiples llamadas a la API de los residentes de cada localidad
      let a = await Promise.all(
        data.residents.map((value) => {
          return fetch(value)
            .then((res) => res.json());
        })
      );
      setResults(a);  //Actualizando el estado "results"
    })();
  }, [api]);


  return (
    <div className='container'>
      <div className='row mb-4'>
        <h1 className='ph1 text-center mb-4'>Localidad : {name === "" ? "Desconocido" : name}</h1>
        <h5 className='text-center'>Dimensión : {dimension === "" ? "Desconocido" : dimension}</h5>
        <h6 className='text-center'>Tipo : {type === "" ? "Desconocido" : type}</h6>
      </div>

      <div className='row'>
        <div className='col-lg-3 col-12'>
          <h4 className='episodio-txt text-center mb-4'> Elige una localidad </h4>
          <InputGroup setID={setID} name='Localidad' total={126} />
        </div>
        <div className='col-lg-8 col-12'>
          <div className='row'>
            <Cards page='/location/' results={results} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Location;