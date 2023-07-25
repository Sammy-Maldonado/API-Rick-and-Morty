import React from 'react';

const InputGroup = ({ total, name, setID }) => {
  return (
    <div class='input-group mb-3'>
      <select
        onChange={e => setID(e.target.value)}
        class='form-select' id={name}>
        <option value='1' selected>Elige...</option>

        {/* Generando todas las opciones del select */}
        {[...Array(total).keys()].map(value => {
          return (
            <option value={value + 1}>
              {name} - {value + 1}
            </option>
          );
        })};
      </select>
    </div>
  );
};

export default InputGroup;