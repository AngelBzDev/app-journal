import types from "../types/types"

const init = {
  loading: false,
  msgError: null
}

const uiReducer = (state = init, action) => {

  switch(action.type){
    case types.uiSetError:
      return {
        ...state,
        msgError: action.payload
      }
    case types.uiRemoveError:
      return {
        ...state,
        msgError: null
      }
    case types.uiStartLoading:
      return {
        ...state,
        loading: true
      }
    case types.uiFinishLoading:
      return {
        ...state,
        loading: false
      }
    default:
      return state
  }
}

export default uiReducer