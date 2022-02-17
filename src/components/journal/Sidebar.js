import React from "react";
import { useDispatch } from "react-redux";
import { startLogout } from "../../actions/auth";

const Sidebar = () => {
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(startLogout());
  }

  return (
    <div className="journal__sidebar container">
      <div className="journal__sidebar--options">
        <p className="journal__user">Angel</p>
        <button className="button btn-sign-out" onClick={handleLogout}>
          Cerrar Sesión
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
