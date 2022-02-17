import React from "react";

import { Link } from "react-router-dom";

import validator from "validator";

//Hook hecho por redux, es como dispatch del useReducer de react
import { useDispatch, useSelector } from "react-redux";
import { startGoogleLogin, startLoginEmailPassword } from "../../actions/auth";

//Componentes de ui
import BtnGoogle from "../buttons/BtnGoogle";
import Button from "../buttons/Button";
import Input from "../forms/Input";
import useForm from "../../hooks/useForm";

import { removeErrorAction, setErrorAction } from "../../actions/ui";

const LoginScreen = () => {
  const dispatch = useDispatch();
  //Este hook sirve para poder utilizar el state del store, como parametro lleva un callback
  const { loading, msgError } = useSelector((state) => state.ui);

  const [formValues, handleInputChange] = useForm({
    email: "",
    password: "",
  });
  const { email, password } = formValues;

  const isFormValid = (values) => {
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
    dispatch(removeErrorAction());
    return true;
  };

  const handleGoogleLogin = () => {
    dispatch(startGoogleLogin());
  };

  const handleLogin = (event) => {
    event.preventDefault();
    if (isFormValid(formValues)) {
      dispatch(startLoginEmailPassword(email, password));
    }
  };

  return (
    <div>
      <h3 className="title">Iniciar</h3>
      <div className="butons-container">
        <BtnGoogle
          label={"Con Google"}
          showIcon={true}
          classN={"google-btn"}
          onClick={handleGoogleLogin}
        />
        <Link to={"/auth/register"} onClick={() => dispatch(removeErrorAction())}>
          <BtnGoogle label={"Registrarse"} classN={"btn-pink"} />
        </Link>
      </div>
      <form onSubmit={handleLogin}>
        {msgError && (
          <div className="message-error">
            <p>{msgError}</p>
          </div>
        )}

        <Input
          label={"Correo electronico"}
          name={"email"}
          type="email"
          value={email}
          onChange={handleInputChange}
        />
        <Input
          label={"Contraseña"}
          name={"password"}
          type="password"
          value={password}
          onChange={handleInputChange}
        />
        <Button type="submit" loading={loading}>
          Iniciar
        </Button>
      </form>
    </div>
  );
};

export default LoginScreen;
