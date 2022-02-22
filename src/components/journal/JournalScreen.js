import React from 'react';
import { BsPlusLg } from 'react-icons/bs';
import ButtonRound from '../buttons/ButtonRound';
import JournalEntries from './JournalEntries';
import Sidebar from './Sidebar';

const JournalScreen = () => {
  return (
    <>
      <Sidebar />
      <main className="container journal__main-content">
        <ButtonRound nameClass='btn-newEntry'>
          <BsPlusLg size={'2rem'}/>
        </ButtonRound>
        <h1 className='title'>Notas</h1>
        <JournalEntries />
      </main>
    </>
  )
};

export default JournalScreen;
