/* eslint-disable eqeqeq */
/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable jsx-a11y/label-has-for */
/* eslint-disable react/prop-types */
import React from 'react';

function FormField({ label, type, name, value, onChange }) {
  return (
    <div>
      <label>
        {label}:
        {type != 'textarea' ? (
          <input type={type} value={value} name={name} onChange={onChange} />
        ) : (
          <textarea type={type} value={value} name={name} onChange={onChange} />
        )}
      </label>
    </div>
  );
}

export default FormField;
