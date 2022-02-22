import React, { useEffect, useState } from "react";

import { getAuth, onAuthStateChanged } from "firebase/auth";
import { useDispatch } from "react-redux";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";

import { login } from "../actions/auth";

import LoadingScreen from "../components/forms/LoadingScreen";
import AuthRouter from "./AuthRouter";
import JournalRoutes from "./JournalRoutes";
import PrivateRoute from "./PrivateRoute";
import PublicRoute from "./PublicRoute";

const AppRouter = () => {
  const dispatch = useDispatch();
  const [checking, setChecking] = useState(true);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const auth = getAuth();
    //Esta funcion se utiliza para recordara el ultimo usuario que haya iniciado sesion
    onAuthStateChanged(auth, (user) => {
      if (user?.uid) {
        dispatch(login(user.uid, user.displayName));
        setIsLoggedIn(true);
      }
      else{
        setIsLoggedIn(false)
      }
      setTimeout(() => {
        setChecking(false);
      }, 1500);
    });
  }, [dispatch, setChecking]);

  if (checking) return <LoadingScreen />;

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route
            path="/auth/*"
            element={
              <PublicRoute isLoggedIn={isLoggedIn}>
                <AuthRouter />
              </PublicRoute>
            }
          ></Route>
          <Route
            path="/*"
            element={
              <PrivateRoute isLoggedIn={isLoggedIn}>
                <JournalRoutes />
              </PrivateRoute>
            }
          ></Route>
          {/* <Route path="/note/:noteId" element={<NoteScreen />}></Route> */}
          <Route path="*" element={<Navigate to="/auth/login" />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default AppRouter;
