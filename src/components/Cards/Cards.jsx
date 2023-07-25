import React from 'react';
import styles from './Cards.module.scss';
import { Link } from 'react-router-dom';

const Cards = ({ results, page }) => {
  let display;

  if (results) {
    display = results.map((value) => {
      let { id, name, image, species, gender, origin, status } = value;
      return (
        // Enlace a la página de detalles del personaje
        <Link
          to={`${page}${id}`}
          key={id}
          className='col-lg-4 col-md-6 col-12 mb-4 position-relative'
        >
          <div className={`${styles.cards} d-flex flex-column justify-content-center`}>
            <img
              src={image}
              alt={name}
              className={`${styles.img} img-fluid`}
            />
            <div style={{ padding: "10px" }} className='content'>
              <div className='fs-4 fw-bold mb-4'>{name}</div>
              <div className=''>
                <div className='fs-5'>Origin: {origin.name}</div>
                <div className='fs-5'>Species: {species}</div>
                <div className='fs-5'>Gender: {gender}</div>
              </div>
            </div>
          </div>

          {/* Etiqueta del estado del personaje */}
          {(() => {
            if (status === 'Dead') {
              return (
                <div className={`${styles.badge} position-absolute badge bg-danger`}>
                  {status}
                </div>
              );
            }
            else if (status === 'Alive') {
              return (
                <div className={`${styles.badge} position-absolute badge bg-success`}>
                  {status}
                </div>
              );
            } else {
              return (
                <div className={`${styles.badge} position-absolute badge bg-secondary`}>
                  {status}
                </div>
              );
            }
          })()}
        </Link>
      );
    });
  } else {
    display = 'Personaje no encontrado :c';
  }
  return <>{display}</>;
};

export default Cards;