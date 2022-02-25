import React from 'react';
import { BsPlusLg } from 'react-icons/bs';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { startAddNewNote } from '../../actions/notes';
import ButtonRound from '../buttons/ButtonRound';
import JournalEntries from './JournalEntries';
import Sidebar from './Sidebar';

const JournalScreen = () => {

  const navigate = useNavigate()
  const dispatch = useDispatch()

  const handleAddNote = (e) => {
    dispatch(startAddNewNote());
    navigate('/note/')
  };

  return (
    <>
      <Sidebar />
      <main className="container journal__main-content">
        <ButtonRound nameClass='btn-newEntry' onClick={handleAddNote}>
          <BsPlusLg size={'2rem'}/>
        </ButtonRound>
        <h1 className='title'>Notas</h1>
        <JournalEntries />
      </main>
    </>
  )
};

export default JournalScreen;
