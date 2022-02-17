import { googleAuthProvider } from "../firebase/firebaseConfig";
import {
  getAuth,
  signInWithPopup,
  createUserWithEmailAndPassword,
  updateProfile,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";

import types from "../types/types";
import { finishLoading, startLoading } from "./ui";

//Iniciar con google
export const startGoogleLogin = () => {
  //Retorna un callback
  return (dispatch) => {
    const auth = getAuth();
    signInWithPopup(auth, googleAuthProvider).then(({ user }) =>
      dispatch(login(user.uid, user.displayName))
    );
  };
};

export const startLoginEmailPassword = (email, password) => {
  return (dispatch) => {

    dispatch(startLoading())

    const auth = getAuth();
    signInWithEmailAndPassword(auth, email, password).then(({ user }) =>
      dispatch(login(user.uid, user.displayName))
    ).catch(err => console.log(err.code));
    dispatch(finishLoading())
  };
};

//Crear nuevo usuario
export const createUser = (email, password, name) => {
  //Retorna un callback
  return (dispatch) => {
    const auth = getAuth();
    createUserWithEmailAndPassword(auth, email, password)
      .then(async ({ user }) => {
        await updateProfile(user, { displayName: name });
        dispatch(login(user.uid, user.displayName));
      })
      .catch((err) => console.log(err));
  };
};

export const startLogout = () => {
  return async (dispatch) => {
    await signOut(getAuth())
    dispatch(logout())
  }
}

//Accion del reduce
export const login = (uid, displayName) => ({
  type: types.login,
  payload: {
    uid,
    displayName,
  },
});

export const logout = () => ({
  type: types.logout
})
