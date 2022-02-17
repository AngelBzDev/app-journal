import React from 'react';

const Input = ({label, onChange, ...res}) => {

  return (
    <div className="input__container">
      <label className="input__label">{label}</label>
      <input className="input__input" {...res} onChange={onChange}/>
    </div>
  )
};

export default Input;
