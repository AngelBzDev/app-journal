import React from 'react';
import { BsPlusLg } from 'react-icons/bs';
import { useNavigate } from 'react-router-dom';
import ButtonRound from '../buttons/ButtonRound';
import JournalEntries from './JournalEntries';
import Sidebar from './Sidebar';

const JournalScreen = () => {

  const navigate = useNavigate()

  return (
    <>
      <Sidebar />
      <main className="container journal__main-content">
        <ButtonRound nameClass='btn-newEntry' onClick={() => navigate('/note/')}>
          <BsPlusLg size={'2rem'}/>
        </ButtonRound>
        <h1 className='title'>Notas</h1>
        <JournalEntries />
      </main>
    </>
  )
};

export default JournalScreen;
