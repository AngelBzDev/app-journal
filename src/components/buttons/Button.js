import React from "react";

const Button = ({ children, type, loading }) => {
  return (
    <button className="button btn-black" type={type} disabled={loading}>
      {children}
    </button>
  );
};

export default Button;
