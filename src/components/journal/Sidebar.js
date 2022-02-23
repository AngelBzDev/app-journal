import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { startLogout } from "../../actions/auth";

const Sidebar = () => {
  const dispatch = useDispatch();
  const {name} = useSelector(store => store.auth )
  const [firstName] = name !== null ? name.split(' ') : ''

  const handleLogout = () => {
    dispatch(startLogout());
  }

  return (
    <div className="journal__sidebar container">
      <div className="journal__sidebar--options">
        <p className="journal__user">{firstName}</p>
        <button className="button btn-sign-out" onClick={handleLogout}>
          Cerrar Sesión
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
