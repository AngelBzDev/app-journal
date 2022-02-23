//Para crear el store se importa de redux la funcion creareStore
import {createStore, combineReducers, compose, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'

import authReducer from '../reducers/authReducer'
import notesReducer from '../reducers/notesReducer';
import uiReducer from '../reducers/uiReducer';

//Se usa para poder usar redux devtools
const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

//Como su nombre lo indica, se usa para combinar reducers, ya que createStore solo puede recibir un reducer
const reducers = combineReducers({
  auth: authReducer,
  ui: uiReducer,
  notes: notesReducer
})

const store = createStore(
  reducers,
  //Aqui se inicia el middleware
  composeEnhancers(applyMiddleware(thunk))
)

export default store

