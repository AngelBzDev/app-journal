import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase/firebaseConfig";

const loadNotes = async (uid) => {
  const notesSnap = await getDocs(collection(db, `${uid}/journal/notes`))
  const notes = []

  notesSnap.forEach(doc => {
    notes.push( {
      id: doc.id,
      ...doc.data()
    })
  })

  return notes
}

export default loadNotes