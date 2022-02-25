import React, { useEffect, useState } from "react";

import { getAuth, onAuthStateChanged } from "firebase/auth";
import { useDispatch, useSelector } from "react-redux";
import { BrowserRouter, Navigate, Route, Routes, useParams, useResolvedPath } from "react-router-dom";

import { login } from "../actions/auth";

import LoadingScreen from "../components/forms/LoadingScreen";
import AuthRouter from "./AuthRouter";
import JournalRoutes from "./JournalRoutes";
import PrivateRoute from "./PrivateRoute";
import PublicRoute from "./PublicRoute";
import { startLoadingNotes } from "../actions/notes";

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

        dispatch(startLoadingNotes(user.uid));
      } else {
        setIsLoggedIn(false);
      }
      setTimeout(() => {
        setChecking(false);
      }, 1000);
    });
  }, [dispatch, setChecking, ]);

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
