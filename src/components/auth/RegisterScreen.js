import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import validator from "validator";
import { createUser } from "../../actions/auth";
import { removeErrorAction, setErrorAction } from "../../actions/ui";
import useForm from "../../hooks/useForm";

import BtnGoogle from "../buttons/BtnGoogle";
import Button from "../buttons/Button";
import Input from "../forms/Input";

const RegisterScreen = () => {
  const [formValues, handleInputChange] = useForm({
    name: "",
    email: "",
    password: "",
  });

  const { name, email, password } = formValues;

  const dispatch = useDispatch();
  const { msgError } = useSelector((state) => state.ui);

  const isFormValid = (values) => {
    if (!values.name) {
      dispatch(setErrorAction("Todos los campos son obligatorios"));
      return false;
    }

    if (!values.email) {
      dispatch(setErrorAction("Todos los campos son obligatorios"));
      return false;
    } else if (!validator.isEmail(values.email)) {
      dispatch(setErrorAction("Ese no es un correo"));
      return false;
    }

    if (!values.password) {
      dispatch(setErrorAction("Todos los campos son obligatorios"));
      return false;
    } else if (!validator.isStrongPassword(values.password)) {
      dispatch(
        setErrorAction(`Su contraseña debe contener:
        Al menos 8 caracteres,
        Al menos una mayuscula,
        Al menos un numero,
        Al menos un simbolo
      `)
      );
      return false;
    }

    return true;
  };

  const handleRegister = (event) => {
    event.preventDefault();
    if (isFormValid(formValues)) {
      dispatch(createUser(email, password, name));
    }
  };

  return (
    <div>
      <h3 className="title">Registrarse</h3>
      <Link to="/auth/login" onClick={() => dispatch(removeErrorAction())}>
        <BtnGoogle label={"Ya estoy registrado"} classN={"btn-pink"} />
      </Link>
      <form onSubmit={handleRegister}>
        {msgError && (
          <div className="message-error">
            <p>{msgError}</p>
          </div>
        )}
        <Input
          label={"Nombre"}
          name={"name"}
          type="text"
          value={formValues.name}
          onChange={handleInputChange}
        />
        <Input
          label={"Correo electronico"}
          name={"email"}
          type="email"
          value={formValues.email}
          onChange={handleInputChange}
        />
        <Input
          label={"Contraseña"}
          name={"password"}
          type="password"
          value={formValues.password}
          onChange={handleInputChange}
        />
        <Button>Registrarse</Button>
      </form>
    </div>
  );
};

export default RegisterScreen;
