import React from 'react';

const ButtonRound = ({type, children, nameClass, moreClass}) => {
  return (
    <button type={type} className={`btn-circle ${nameClass} ${moreClass}`} >
      {children}
    </button>
  )
};

export default ButtonRound;
