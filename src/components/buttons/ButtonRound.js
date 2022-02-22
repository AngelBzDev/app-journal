import React from 'react';
import { useNavigate } from 'react-router-dom';

const ButtonRound = ({type, children, nameClass, moreClass, action}) => {

  const navigate = useNavigate()

  return (
    <button type={type} className={`btn-circle ${nameClass} ${moreClass}`} onClick={() => action === 'return' && navigate(-1)} >
      {children}
    </button>
  )
};

export default ButtonRound;
