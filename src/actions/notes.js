import { addDoc, collection } from "firebase/firestore";
import { db } from "../firebase/firebaseConfig";
import loadNotes from "../helpers/loadNotes";
import types from "../types/types.js";

export const startAddNewNote = (note) => {
  return async (dispatch, getState) => {
    const uid = getState().auth.uid;

    const newNote = {
      ...note,
      date: new Date().getTime(),
    };

    const docRef = await addDoc(
      collection(db, `${uid}/journal/notes`),
      newNote
    );
    dispatch(activeNote(docRef.id, newNote));
  };
};

export const activeNote = (id, note) => ({
  type: types.notesActive,
  payload: {
    id,
    ...note,
  },
});

export const setNotes = (notes) => ({
  type: types.notesLoad,
  payload: notes,
});

export const startLoadingNotes = (uid) => {
  return async (dispatch) => {
    const notes = await loadNotes(uid);
    dispatch(setNotes(notes));
  };
};
