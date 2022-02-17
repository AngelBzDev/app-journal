import React from "react";
import { BsGoogle } from "react-icons/bs";

const BtnGoogle = ({label, showIcon, classN, onClick}) => {
  return (
    <div className={`button ${classN}`} onClick={onClick} >
      <div className="google-icon-wrapper">
        {
          (showIcon) && <BsGoogle className="icon" size={'1.5rem'}/>
        }
      </div>
      <p className="btn-text">
        <b>{label}</b>
      </p>
    </div>
  );
};

export default BtnGoogle;
