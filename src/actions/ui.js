import types from "../types/types";

export const setErrorAction = (errorMsg) => ({
  type: types.uiSetError,
  payload: errorMsg,
});

export const removeErrorAction = () => ({ type: types.uiRemoveError });

export const startLoading = () => ({
  type: types.uiStartLoading
})

export const finishLoading = () => ({
  type: types.uiFinishLoading
})