import React from 'react'
import { Route, Routes } from 'react-router-dom'
import JournalScreen from '../components/journal/JournalScreen'
import NoteScreen from '../components/notes/NoteScreen'

const JournalRoutes = () => {
  return (
    <Routes>
      <Route path='/' element={<JournalScreen />}/>
      <Route path="/note/:noteId" element={<NoteScreen /> } />
    </Routes>
  )
}

export default JournalRoutes