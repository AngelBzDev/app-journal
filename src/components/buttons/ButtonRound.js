import React from 'react';

const ButtonRound = ({type, children, nameClass, moreClass, onClick}) => {

  return (
    <button type={type} className={`btn-circle ${nameClass} ${moreClass}`} onClick={onClick} >
      {children}
    </button>
  )
};

export default ButtonRound;
