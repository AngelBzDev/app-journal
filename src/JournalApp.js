import React from "react";

//Es parecido a context pero hay que importarlo de react-redux
import {Provider} from 'react-redux'
import store from "./store/store";

import AppRouter from "./routers/AppRouter";

//Archivo principal de sass
import './styles/styles.scss'

const JournalApp = () => {
  return (
    <Provider store={store}>
      <AppRouter />
    </Provider>
  )
};

export default JournalApp;
