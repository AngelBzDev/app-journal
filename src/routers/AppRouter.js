import { getAuth, onAuthStateChanged } from "firebase/auth";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { login } from "../actions/auth";
import LoadingScreen from "../components/forms/LoadingScreen";
import JournalScreen from "../components/journal/JournalScreen";
import NoteScreen from "../components/notes/NoteScreen";
import AuthRouter from "./AuthRouter";

const AppRouter = () => {
  const dispatch = useDispatch();
  const [checking, setChecking] = useState(true);
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  useEffect(() => {
    const auth = getAuth();
    //Esta funcion se utiliza para recordara el ultimo usuario que haya iniciado sesion
    onAuthStateChanged(auth, (user) => {
      if (user?.uid) {
        dispatch(login(user.uid, user.displayName));
        setIsLoggedIn(true)
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
          <Route path="/auth/*" index element={<AuthRouter />}></Route>
          <Route path="/" element={<JournalScreen />}></Route>
          <Route path="/note/:noteId" element={<NoteScreen />}></Route>
          <Route path="*" element={<Navigate to="/auth/login" />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default AppRouter;
